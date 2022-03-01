<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    function getAllItem(){
        $data = Item::All();
        return response()->json($data, 200);
    }

    function getByID($id){
        $data = Item::find($id);
        return response()->json($data, 200);
    }

    function createItem(Request $request){
        $validated = $request->validate([
            'item' => 'required',
            'unit' => 'required',
            'createrID' => 'required',
        ]);

        $items = new Item;
        $data = $request->All();
        $items->item = $data['item'];
        $items->unit = $data['unit'];
        $items->createrID = $data['createrID'];
        $items->save();
        return response()->json($items, 200);
    }

    function editItem(Request $request){
        $validated = $request->validate([
            'item' => 'required',
            'unit' => 'required',
            'createrID' => 'required',
        ]);

        $data = $request->All();
        $items = Item::find($data['id']);
        $items->update($data);
        return response()->json($items, 200);
    }

    
    function searchItemsByName($name){
        $item = DB::table('items')->where('item','LIKE', '%'.$name.'%')->get();
        return response()->json($item, 200);
    }
}
