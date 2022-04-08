<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

/* ALL PRODUCTS ROUTES */

Route::get('/products', [ProductController::class, 'index'])->name('products');

Route::get('/addProduct', [ProductController::class, 'create'])->name('addProduct');

Route::post('/addProduct', [ProductController::class, 'store'])->name('storeProduct');

Route::get('/editProduct/{id}', [ProductController::class, 'edit'])->name('editProduct');

Route::post('/updateProduct/{id}', [ProductController::class, 'update'])->name('updateProduct');

Route::delete('/deleteProduct/{id}', [ProductController::class, 'delete'])->name('deleteProduct');

/* ALL CATEGORES ROUTES */

Route::get('/categories', [CategoryController::class, 'index'])->name('categories');

Route::post('/categories', [CategoryController::class, 'store'])->name('storeCategory');

Route::get('/editCategory/{id}', [CategoryController::class, 'edit'])->name('editCategory');

Route::post('/updateCategory/{id}', [CategoryController::class, 'update'])->name('updateCategory');

Route::delete('/deleteCategory/{id}', [CategoryController::class, 'delete'])->name('deleteCategory');
