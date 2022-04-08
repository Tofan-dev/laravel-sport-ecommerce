<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{    use HasFactory;

    protected $fillable = [
        'user_id',
        'total',
        'status',
        'is_paid',
        'is_delivered',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

   public function products()
   {
       return $this->belongsToMany(Product::class, 'orders_products', 'order_id', 'product_id');
   }

}
