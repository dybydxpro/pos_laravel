<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PayDetails;

use Carbon\Carbon;

class PayDetailsController extends Controller
{
    function addPay(Request $request){
        $validated = $request->validate([
            'billID' => 'required',
            'payType' => 'required',
            'payblePrice' => 'required',
            'dueDate' => 'required',
            'remakes' => 'required',
        ]);

        $pay = new PayDetails;
        $data = $request->All();
        $pay->billID = $data["billID"];
        $pay->payType = $data["payType"];
        $pay->payblePrice = $data["payblePrice"];
        $pay->dueDate = $data["dueDate"];
        $pay->remakes = $data["remakes"];
        $pay->save();

        return response()->json($pay, 200);
    }
}
