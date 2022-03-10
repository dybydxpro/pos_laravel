<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\Cart;
use App\Models\Stock;
use PDF;

use Carbon\Carbon;

class SalesController extends Controller
{
    function fetchAllBillItems(){
        $data = DB::table('sales')
                ->join('items','items.itemID', '=', 'sales.itemID')
                ->join('stocks','stocks.stockID', '=', 'sales.stockID')->get();
        return response()->json($data, 200);
    }

    function fetchAllBillItemsByBillID($id){
        $data = $data = DB::table('sales')->where('billID', $id)
                ->join('items','items.itemID', '=', 'sales.itemID')
                ->join('stocks','stocks.stockID', '=', 'sales.stockID')->get();
        return response()->json($data, 200);
    }

    function sellBillItems($id){
        $billID = 0;
        $billID = Sales::max('billID');
        $count = Cart::count('userID');
        $mytime = Carbon::now();
        $billDate =  $mytime->toDateTimeString();
        if($billID == "{}"){
            $billID = 1;
        }
        else{
            ++$billID;
        }

        for($i = 0; $i < $count; ++$i){
            $d = DB::table('carts')->where('userID', $id)->first();
            $sale = new Sales();
            $sale->billID = $billID;
            $sale->billDate = $billDate;
            $sale->itemID = $d->itemID;
            $sale->stockID = $d->stockID;
            $sale->cartQty = $d->cartQty;
            $sale->cartPrice = $d->cartPrice;
            $sale->sellPrice = $d->sellPrice;
            $sale->userID = $d->userID;
            $sale->save();

            $cart = Cart::find($d->cartID);
            $cart-> delete();

            $stockQty = DB::table("stocks")->where('stockID', $d->stockID)->pluck('qty');
            $stockQty = (int)substr($stockQty, 1, -1);
            $value = $stockQty - (int)$d->cartQty;
            DB::table('stocks')->where('stockID', (int)$d->stockID)->update(array('qty' => $value));
        }
        return response()->json($billID, 200);
    }

    function billFetch($id){
        $data = DB::table('sales')->where('billID', $id)
                    ->join('items','items.itemID', '=', 'sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'sales.stockID')->get();
        return response()->json($data, 200);
    }

    function downloadBill($id){
        $data = DB::table('sales')->where('billID', $id)
                    ->join('items','items.itemID', '=', 'sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'sales.stockID')->get();
        $pdf = PDF::loadView('pdf', compact('data'));
        $lable = 'Bill'.$id.'.pdf';
        return $pdf->setPaper('a4', 'portrait')->download($lable);
    }

    /*function bill($id){
        $data = DB::table('sales')->where('billID', $id)
                    ->join('items','items.itemID', '=', 'sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'sales.stockID')->get();
        return view('pdf', compact('data'));
    }*/
}
