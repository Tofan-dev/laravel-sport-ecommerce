<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Product routes
Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);

Route::get('/sales', [SaleController::class, 'index']);
Route::post('/sales', [SaleController::class, 'store']);
// Route::get('/products/edit/{id}', [ProductController::class, 'edit']);
// Route::patch('/products/update/{id}', [ProductController::class, 'update']);
// Route::delete('/products/delete/{id}', [ProductController::class, 'destroy']);
