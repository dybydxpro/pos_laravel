<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoodReceivingNote extends Model
{
    use HasFactory;

    protected $fillable = [
        "grnDate",
        "invoiceNo",
        "invoiceDate",
        "supplier",
        "itemID",
        "stockID",
        "grnQty",
        "payType",
        "bulckPrice",
        "actualBulkPrice",
        "grnRecorderID",
        "dueDate",
        "remarks"
    ];

    protected $primaryKey = 'grnID';
}
