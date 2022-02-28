<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Stock;
use App\Models\Item;

class StockController extends Controller
{
    function getAllStock(){
        $data = DB::table('stocks')->join('items', 'items.id', '=', 'stocks.itemID')->get();
        return response()->json($data, 200);
    }

    function getByID($id){
        $data = DB::table('stocks')->join('items', 'items.id', '=', 'stocks.itemID')->where('stocks.id', $id)->get();
        return response()->json($data, 200);
    }

    function createStock(Request $request){
        $validated = $request->validate([
            'itemID' => 'required',
            'qty' => 'required',
            'holesale_price' => 'required',
            'holesaleretail_price' => 'required',
            'retail_price' => 'required',
            'stockCreaterID' => 'required',
        ]);

        $stock = new Stock;
        $data = $request->All();
        $stock->itemID = $data["itemID"];
        $stock->qty = $data["qty"];
        $stock->holesale_price = $data["holesale_price"];
        $stock->holesaleretail_price = $data["holesaleretail_price"];
        $stock->retail_price = $data["retail_price"];
        $stock->stockCreaterID = $data["stockCreaterID"];
        $stock->save();
    }

    function editStock(Request $request){

    }
}
