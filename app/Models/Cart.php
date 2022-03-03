<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'itemID', 'stockID', 'cartQty', 'cartPrice', 'userID'
    ];

    protected $primaryKey = 'cartID';
}
