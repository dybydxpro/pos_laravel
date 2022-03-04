<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\HolesaleCart;

class HoleSaleCartController extends Controller
{
    function getHSCartItems($id){
        $data = DB::table('holesale_carts')
            //->select('cartID', 'itemID', 'stockID', 'item', 'unit', 'cartQty', 'cartPrice')
            ->join('items', 'items.itemID', '=', 'holesale_carts.itemID')
            ->join('stocks', 'stocks.stockID', '=', 'holesale_carts.stockID')
            ->where('userID', $id)->get();
        return response()->json($data, 200);
    }

    function addDataToHSCart(Request $request){
        $validated = $request->validate([
            'itemID' => 'required',
            'stockID' => 'required',
            'cartQty' => 'required',
            'checkBox' => 'required',
            'discount' => 'required',
            'userID' => 'required'
        ]); 

        $cart = new HolesaleCart;
        $data = $request->All();
        $holesaleretail_price = DB::table("stocks")->where('stockID', $data["stockID"])->pluck('holesaleretail_price');
        $holesaleretail_price = (int)substr($holesaleretail_price, 1, -1);
        $qty = (int)$data["cartQty"];
        $discount = (float)$data["discount"];
        //$itemID = DB::table("stocks")->where('stockID', $data["stockID"])->pluck('retail_price');

        $cart->itemID = $data["itemID"];
        $cart->stockID = $data["stockID"];
        $cart->cartQty = $data["cartQty"];
        $cart->cartPrice = $qty *  $holesaleretail_price;
        if($data["checkBox"] == false){
            $cart->sellPrice = ($qty *  $holesaleretail_price) - $discount;
        }
        elseif($data["checkBox"] == true){
            $cart->sellPrice = ($qty *  $holesaleretail_price) - ($qty *  $holesaleretail_price)*$discount/100;
        }
        $cart->userID = $data["userID"];
        $cart->save();
        return response()->json($cart, 200);
    }

    function deleteHSCartItem($id){
        $data = HolesaleCart::find($id);
        $data-> delete();
        //Cart::destroy($id);
        return response()->json($data, 200);
    }
}
