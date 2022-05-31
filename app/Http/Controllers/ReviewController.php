<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Requests\StoreReviewRequest;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reviews = Review::with('user', 'product')->get();
        return response()->json($reviews);
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
     * @param  \Illuminate\Http\StoreReviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReviewRequest $request)
    {
        $review = new Review;
        $review->product_id        = $request->productId;
        $review->user_id           = $request->userId;
        $review->rating            = $request->rating;
        $review->user_name         = $request->userName;
        $review->user_comment      = $request->userComment;

        $review->save();

        return response()->json(['success' => 'Review succesfully added!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $review = Review::find($id);
        return response()->json($review);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $review = Review::find($id);

        $review->product_id        = $request->productId;
        $review->user_id           = $request->userId;
        $review->rating            = $request->rating;
        $review->user_name         = $request->userName;
        $review->user_comment      = $request->userComment;

        $review->save();

        return response()->json(['success' => 'Review updated succesfully!']); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $review = Review::find($id);

        if ($review) {
            $review->delete();
        }

        // return redirect('/reviews')->with('successMsg', 'Review successfully deleted.');
        return response()->json(['success' => 'Review deleted succesfully!']);
    }
}
