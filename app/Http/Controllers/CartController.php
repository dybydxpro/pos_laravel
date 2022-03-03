<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    function getCartItems($id){
        $data = DB::table('carts')
            //->select('cartID', 'itemID', 'stockID', 'item', 'unit', 'cartQty', 'cartPrice')
            ->join('items', 'items.itemID', '=', 'carts.itemID')
            ->join('stocks', 'stocks.stockID', '=', 'carts.stockID')
            ->where('userID', $id)->get();
        return response()->json($data, 200);
    }

    function addDataToCart(Request $request){
        $validated = $request->validate([
            'itemID' => 'required',
            'stockID' => 'required',
            'cartQty' => 'required',
            'userID' => 'required'
        ]); 

        $cart = new Cart;
        $data = $request->All();
        $retail_price = DB::table("stocks")->where('stockID', $data["stockID"])->pluck('retail_price');
        $retail_price = (int)substr($retail_price, 1, -1);
        $qty = (int)$data["cartQty"];
        //$itemID = DB::table("stocks")->where('stockID', $data["stockID"])->pluck('retail_price');

        $cart->itemID = $data["itemID"];
        $cart->stockID = $data["stockID"];
        $cart->cartQty = $data["cartQty"];
        $cart->cartPrice = $qty *  $retail_price;
        $cart->userID = $data["userID"];
        $cart->save();
        return response()->json($cart, 200);
    }

    function deleteCartItem($id){
        $data = Cart::find($id);
        $data-> delete();
        //Cart::destroy($id);
        return response()->json($data, 200);
    }
}
