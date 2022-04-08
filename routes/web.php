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

// Route::get('/products', [ProductController::class, 'index'])->name('products');

// Route::get('/addProduct', [ProductController::class, 'create'])->name('addProduct');

// Route::post('/addProduct', [ProductController::class, 'store'])->name('storeProduct');

// Route::get('/editProduct/{id}', [ProductController::class, 'edit'])->name('editProduct');

// Route::post('/updateProduct/{id}', [ProductController::class, 'update'])->name('updateProduct');

// Route::delete('/deleteProduct/{id}', [ProductController::class, 'delete'])->name('deleteProduct');
Route::resource('products', ProductController::class);

/* ALL CATEGORES ROUTES */

// Route::group(['prefix' => 'categories'], function() {
    //     Route::get('/', [CategoryController::class, 'index']);
//     Route::post('/', [CategoryController::class, 'store']);
//     Route::get('/{id}', [CategoryController::class, 'edit']);
//     Route::patch('/{id}', [CategoryController::class, 'update']);
//     Route::delete('delete/{id}', [CategoryController::class, 'destroy']);
// });

Route::resource('categories', CategoryController::class);
