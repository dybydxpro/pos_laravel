<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoodReceivingNote extends Model
{
    use HasFactory;

    protected $fillable = [
        "grnDate",
        "stockID",
        "qty",
        "payType"
    ];
}
