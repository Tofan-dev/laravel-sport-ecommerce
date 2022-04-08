<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(8);
        // dd($products);
        return view('admin.product.products', compact('products'));
        
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
        return view('admin.product.addProduct', compact('categories','products','sales'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        dd('test');

        dd($request->all());
        $product = new Product;
        $product->name = $request->product_name;
        dd($product);
        $product->description = $request->product_description;
        $product->category_id = $request->product_category_id;
        $product->sale_id = $request->product_sale_id;
        $product->price = $request->product_price;
        $product->priceWithDiscount = $request->product_priceWithDiscount;
        $product->stock = $request->product_stock;

        $product_image = $request->file('product_image');
        $name_gen = hexdec(uniqid());
        $img_ext = strtolower($product_image->getClientOriginalExtension());
        $img_name = $name_gen . '.' . $img_ext;
        $up_location = 'image/product/';
        $last_img = $up_location . $img_name;
        $product_image->move($up_location, $img_name);
        $product->image = $last_img;

        dd($product);
        $product->save();

        return redirect(route('products'))->with('successMsg', 'Product successfully added.');
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
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
