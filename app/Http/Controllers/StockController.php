<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Stock;
use App\Models\Item;

class StockController extends Controller
{
    function getAllStock(){
        $data = DB::table('stocks')->join('items', 'items.itemID', '=', 'stocks.itemID')->get();
        return response()->json($data, 200);
    }

    function getByID($id){
        $data = DB::table('stocks')->join('items', 'items.itemID', '=', 'stocks.itemID')->where('stocks.id', $id)->get();
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
        return response()->json($stock, 200);
    }

    function editStock(Request $request){

    }

    function searchStockByItemID($id){
        $data = DB::table('stocks')->where('stocks.itemID', $id)->get();
        return response()->json($data, 200);
    }

    function searchStockByName($name){
        $data = DB::table('stocks')->join('items', 'items.itemID', '=', 'stocks.itemID')->where('items.item','LIKE', '%'.$name.'%')->get();
        return response()->json($data, 200);
    }

    function getAllStockQtyByID($id){
        $data = DB::table('stocks')->where('stockID', $id)->pluck('qty');
        $data = (int)substr($data, 1, -1);
        return response()->json($data, 200);
    }

    function stockByID($id){
        $data = Stock::find($id);
        return response()->json($data, 200);
    }
}
