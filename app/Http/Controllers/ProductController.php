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
        $priceWithDiscount = $request->price - ($request->price * $sale->percent / 100);

        $product->priceWithDiscount = $priceWithDiscount;

        if ($request->hasFile('images')) {
            foreach($request->images as $image) {
                // get image original name and add currect time for an overall unique name
                $imgFileName = time() . '_' . $image->getClientOriginalName();

                $product->image = $image->storeAs('productImages', $imgFileName, 'public');
            }
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
        $categories = Category::all();
        $sales = Sale::all();
        return view('admin.product.editProduct', compact('product', 'categories', 'sales'));
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

        if (!$product) {
            return redirect('/products');
        }

        $product->name              = $request->name;
        $product->description       = $request->description;
        $product->category_id       = $request->category;
        $product->sale_id           = $request->sale;
        $product->price             = $request->price;
        $product->priceWithDiscount = $request->priceWithDiscount;
        $product->stock             = $request->stock;

        // old image
        $imagePath = public_path('/storage/' . $product->image);

        if (!$request->hasFile('image')) {
            $request->except(['image']);
        } else {
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $imgFileName = time() . '_' . $request->image->getClientOriginalName();

            $product->image = $request->image->storeAs('productImages', $imgFileName, 'public');
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
        // dd($id);

        if ($product) {
            $product->delete();
        }

        return response()->json(['success' => 'Product deleted succesfully!']);

        // return redirect('/products')->with('successMsg', 'Product successfully deleted.');
    }
}
