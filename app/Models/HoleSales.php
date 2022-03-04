<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoleSales extends Model
{
    use HasFactory;

    protected $fillable = [
        'billID', 'itemID', 'stockID', 'cartQty', 'cartPrice', 'sellPrice', 'userID'
    ];

    protected $primaryKey = 'salesID';
}
