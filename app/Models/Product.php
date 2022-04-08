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

    //  Get the category that owns the product

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'orders_products', 'product_id', 'order_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
