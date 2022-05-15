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
Route::get('/product/edit/{id}', [ProductController::class, 'edit']);
Route::patch('/product/update/{id}', [ProductController::class, 'update']);
Route::delete('/product/delete/{id}', [ProductController::class, 'destroy']);
// Product routes

// Category routes
Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::get('/category/edit/{id}', [CategoryController::class, 'edit']);
Route::patch('/category/update/{id}', [CategoryController::class, 'update']);
Route::delete('/category/delete/{id}', [CategoryController::class, 'destroy']);
// Category routes

// Sale routes
Route::get('/sales', [SaleController::class, 'index']);
Route::post('/sales', [SaleController::class, 'store']);
Route::get('/sale/edit/{id}', [SaleController::class, 'edit']);
Route::patch('/sale/update/{id}', [SaleController::class, 'update']);
Route::delete('/sale/delete/{id}', [SaleController::class, 'destroy']);
// Sale routes

