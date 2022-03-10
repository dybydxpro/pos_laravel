<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\HoleSales;
use App\Models\HolesaleCart;
use App\Models\Stock;
use PDF;

use Carbon\Carbon;

class HoleSalesController extends Controller
{
    function fetchAllBillItems(){
        $data = DB::table('hole_sales')
                    ->join('items','items.itemID', '=', 'hole_sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'hole_sales.stockID')->get();
        return response()->json($data, 200);
    }

    function fetchAllBillItemsByBillID($id){
        $data = DB::table('hole_sales')->where('billID', $id)
                    ->join('items','items.itemID', '=', 'hole_sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'hole_sales.stockID')->get();
        return response()->json($data, 200);
    }

    function sellBillItems($id){
        $billID = 0;
        $billID = HoleSales::max('billID');
        $count = HolesaleCart::count('userID');
        $mytime = Carbon::now();
        $billDate =  $mytime->toDateTimeString();
        if($billID == "{}"){
            $billID = 1;
        }
        else{
            ++$billID;
        }

        for($i = 0; $i < $count; ++$i){
            $d = DB::table('holesale_carts')->where('userID', $id)->first();
            $stockID = $d->stockID;
            $sale = new HoleSales();
            $sale->billID = $billID;
            $sale->billDate = $billDate;
            $sale->itemID = $d->itemID;
            $sale->stockID = $d->stockID;
            $sale->cartQty = $d->cartQty;
            $sale->cartPrice = $d->cartPrice;
            $sale->sellPrice = $d->sellPrice;
            $sale->userID = $d->userID;
            $sale->save();

            $cart = HolesaleCart::find($d->cartID);
            $cart-> delete();

            $stockQty = DB::table("stocks")->where('stockID', $stockID)->pluck('qty');
            $stockQty = (int)substr($stockQty, 1, -1);
            $value = $stockQty - (int)$d->cartQty;
            DB::table('stocks')->where('stockID', (int)$d->stockID)->update(array('qty' => $value));
        }
        return response()->json($billID, 200);
    }

    function billFetch($id){
        $data = DB::table('hole_sales')->where('billID', $id)
                    ->join('items','items.itemID', '=', 'hole_sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'hole_sales.stockID')->get();
        return response()->json($data, 200);
    }

    function downloadBill($id){
        $data = DB::table('hole_sales')->where('billID', $id)
                    ->join('items','items.itemID', '=', 'hole_sales.itemID')
                    ->join('stocks','stocks.stockID', '=', 'hole_sales.stockID')->get();
        $pdf = PDF::loadView('pdfw', compact('data'));
        $lable = 'BillW'.$id.'.pdf';
        return $pdf->setPaper('a4', 'portrait')->download($lable);
    }
}
