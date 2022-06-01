<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = new Category;
        $category->title = $request->category_title;

        if ($request->hasFile('images')) {
            foreach ($request->images as $image) {
                // get image original name and add currect time for an overall unique name
                $imgFileName = time() . '_' . $image->getClientOriginalName();

                $category->image = $image->storeAs('categoryImages', $imgFileName, 'public');
            }
        }

        $category->save();

        return response()->json(['success' => 'Category succesfully added!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'category_title' => 'required',
        ]);

        $category = Category::find($id);
        $category->title = $request->category_title;
        $imagePath = public_path('/storage/' . $category->image);

        if (!$request->hasFile('image')) {
            $request->except(['image']);
        } else {
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $imgFileName = time() . '_' . $request->image->getClientOriginalName();

            $category->image = $request->image->storeAs('categoryImages', $imgFileName, 'public');
        }

        $category->save();

        return response()->json(['success' => 'Category updated succesfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $Category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);

        $imagePath = public_path('/storage/' . $category->image);
        
        File::delete($imagePath);

        if ($category) {
            $category->delete();
        }

        return response()->json(['success' => 'Category deleted succesfully!']);
    }
}
