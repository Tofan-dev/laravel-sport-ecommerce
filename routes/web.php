<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\UserController;
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

#Route to first blade page 
Route::get('/', function () {
    return view('app');
});

#Any wrong route is redirected to first page
Route::pattern('path', '[a-zA-Z0-9-/]+');
Route::any('{path}', function($page) {
    return view('app');
});


// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

// require __DIR__.'/auth.php';

// /* ALL PRODUCTS ROUTES */

// Route::get('/products', [ProductController::class, 'index'])->name('products');

// Route::get('/addProduct', [ProductController::class, 'create'])->name('addProduct');

// Route::post('/addProduct', [ProductController::class, 'store'])->name('storeProduct');

// Route::get('/editProduct/{id}', [ProductController::class, 'edit'])->name('editProduct');

// Route::post('/updateProduct/{id}', [ProductController::class, 'update'])->name('updateProduct');

// Route::delete('/deleteProduct/{id}', [ProductController::class, 'delete'])->name('deleteProduct');
// Route::resource('products', ProductController::class);

/* ALL CATEGORES ROUTES */

// Route::group(['prefix' => 'categories'], function() {
    //     Route::get('/', [CategoryController::class, 'index']);
//     Route::post('/', [CategoryController::class, 'store']);
//     Route::get('/{id}', [CategoryController::class, 'edit']);
//     Route::patch('/{id}', [CategoryController::class, 'update']);
//     Route::delete('delete/{id}', [CategoryController::class, 'destroy']);
// // });

// Route::resource('categories', CategoryController::class);

// /* ALL SALES ROUTES */

// Route::resource('sales', SaleController::class);

// /* ALL REVIEWS ROUTES */

// Route::resource('reviews', ReviewController::class);

// /* ALL USERS ROUTES */

// Route::resource('users', UserController::class);

// /* ALL ORDERS ROUTES */

// Route::resource('orders', OrderController::class);

// // Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
