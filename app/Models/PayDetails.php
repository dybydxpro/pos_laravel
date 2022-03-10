<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PayDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        "billID",
        "payType",
        "payblePrice",
        "holesaleretail_price",
        "dueDate",
        "remarks"
    ];

    protected $primaryKey = 'payID';
}
