<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('category', 'sale')->get();
        // return view('admin.product.products', compact('products'));
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $products = Product::all();
        $categories = Category::all();
        $sales = Sale::all();
        return view('admin.product.addProduct', compact('categories', 'products', 'sales'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $product                    = new Product;
        $product->name              = $request->name;
        $product->description       = $request->description;
        $product->category_id       = $request->categoryId;
        $product->sale_id           = $request->saleId;
        $product->price             = $request->price;
        $product->stock             = $request->quantity;

        $sale = Sale::where('id', $request->saleId)->first();
        if ($sale->percent != 0)
            $priceWithDiscount = $request->price - ($request->price * $sale->percent / 100);
        else
            $priceWithDiscount = $request->price;

        $product->priceWithDiscount = $priceWithDiscount;

        if ($request->hasFile('image')) {
            $product->image = $this->saveImageToProduct($request->file('image'));
        }

        $product->save();

        return response()->json(['success' => 'Product succesfully added!']);
        // return redirect('/products')->with('successMsg', 'Product successfully added.');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        $product->name              = $request->name;
        $product->description       = $request->description;
        $product->category_id       = $request->categoryId;
        $product->sale_id           = $request->saleId;
        $product->price             = $request->price;
        $product->stock             = $request->quantity;

        $sale = Sale::where('id', $request->saleId)->first();
        $priceWithDiscount = $request->price - ($request->price * $sale->percent / 100);

        $product->priceWithDiscount = $priceWithDiscount;

        if (!$request->hasFile('image')) {
            $request->except(['image']);
        } else {
            $this->checkIfImageExist($product);

            $product->image = $this->saveImageToProduct($request->file('image'));
        }

        $product->save();

        return response()->json(['success' => 'Product updated succesfully!']);

        // return redirect('/products')->with('successMsg', 'Product successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        $imagePath = public_path('/storage/' . $product->image);

        File::delete($imagePath);

        if ($product) {
            $product->delete();
        }

        return response()->json(['success' => 'Product deleted succesfully!']);

        // return redirect('/products')->with('successMsg', 'Product successfully deleted.');
    }

    /**
     * Save image to disk
     * 
     * @param object $image
     * 
     * @return string|null
     */
    private function saveImageToProduct(object $image): ?string
    {
        if ($image) {
            $imgFileName = time() . '_' . $image->getClientOriginalName();
            return $image->storeAs('productImages', $imgFileName, 'public');
        }

        return "no-image";
    }

    /**
     * Check if image already exist on disk and deletes it
     * 
     * @param Product $product
     * 
     * @return void
     */
    private function checkIfImageExist(Product $product): void
    {
        $imagePath = public_path('/storage/' . $product->image);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
    }
}
