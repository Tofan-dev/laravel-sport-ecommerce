<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'country',
        'city',
        'adress',
        'postal_code',
        'phone_number',
    ];

    // The orders that belong to the user.


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
