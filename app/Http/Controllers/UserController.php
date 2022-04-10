<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    $categories = Category::paginate(7);
    return view('admin.category.categories', compact('categories'));

    $users = User::with('orders', 'reviews', 'informations')->paginate(8);
    // dd($count);
    return view('admin.product.users', compact('users'));
}
