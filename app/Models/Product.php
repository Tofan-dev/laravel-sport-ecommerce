<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'sale_id',
        'name',
        'description',
        'image',
        'price',
        'priceWithDiscount',
        'stock',
        'image',
        'rating',
        'total_reviews',
    ];
}
