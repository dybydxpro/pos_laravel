<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\GoodReceivingNote;
use App\Models\Stock;

class GoodReceivingNoteController extends Controller
{
    function getAllGRN(){
        //$data = GoodReceivingNote::orderBy('grnID', 'DESC')->get();
        $data = DB::table('good_receiving_notes')
            ->join('items','items.itemID', '=', 'good_receiving_notes.itemID')
            ->join('stocks','stocks.stockID', '=', 'good_receiving_notes.stockID')
            ->orderBy('grnID', 'DESC')->get();
        return response()->json($data, 200);
    }

    function grnGetByID($id){
        $data = GoodReceivingNote::find($id);
        return response()->json($data, 200);
    }

    function createGRN(Request $request){
        $validated = $request->validate([
            'grnDate' => 'required',
            'invoiceNo' => 'required',
            'invoiceDate' => 'required',
            'supplier' => 'required',
            'itemID' => 'required',
            'stockID' => 'required',
            'grnQty' => 'required',
            'grnRecorderID' => 'required',
            'payType' => 'required',
            'bulckPrice' => 'required',
            'actualBulkPrice' => 'required',
        ]);

        $grn = new GoodReceivingNote();
        $data = $request->All();

        $dueDate = Null;
        $remarks = Null;
        if(isset($data["dueDate"])) { 
            $dueDate = $data["dueDate"];
        }
        if(isset($data["remarks"])) { 
            $remarks = $data["remarks"];
        }

        $grn->grnDate = $data["grnDate"];
        $grn->invoiceNo = $data["invoiceNo"];
        $grn->invoiceDate = $data["invoiceDate"];
        $grn->supplier = $data["supplier"];
        $grn->itemID = $data["itemID"];
        $grn->stockID = $data["stockID"];
        $grn->grnQty = $data["grnQty"];
        $grn->payType = $data["payType"];
        $grn->bulckPrice = $data["bulckPrice"];
        $grn->actualBulkPrice = $data["actualBulkPrice"];
        $grn->grnRecorderID = $data["grnRecorderID"];
        $grn->dueDate = $dueDate;
        $grn->remarks = $remarks;
        $grn->save();

        $stockQty = DB::table("stocks")->where('stockID', $data["stockID"])->pluck('qty');
        $stockQty = (int)substr($stockQty, 1, -1);
        $value = $stockQty + (int)$data["grnQty"];
        DB::table('stocks')->where('stockID', (int)$data["stockID"])->update(array('qty' => $value));
        return response()->json($grn, 200);
    }

    function editGRN(Request $request){
        $validated = $request->validate([
            'grnDate' => 'required',
            'invoiceNo' => 'required',
            'invoiceDate' => 'required',
            'supplier' => 'required',
            'itemID' => 'required',
            'stockID' => 'required',
            'grnQty' => 'required',
            'grnRecorderID' => 'required',
            'payType' => 'required',
            'bulckPrice' => 'required',
            'actualBulkPrice' => 'required',
        ]);
        $data = $request->All();
        $grnQty = (int)$data["grnQty"];
        $grn = GoodReceivingNote::find($data["grnID"]);
        

        /*$dueDate = Null;
        $remarks = Null;
        if(isset($data["dueDate"])) { 
            $dueDate = $data["dueDate"];
        }
        if(isset($data["remarks"])) { 
            $remarks = $data["remarks"];
        }

        $grn->grnID = $data["grnID"];
        $grn->grnDate = $data["grnDate"];
        $grn->invoiceNo = $data["invoiceNo"];
        $grn->invoiceDate = $data["invoiceDate"];
        $grn->supplier = $data["supplier"];
        $grn->itemID = $data["itemID"];
        $grn->stockID = $data["stockID"];
        $grn->grnQty = $data["grnQty"];
        $grn->payType = $data["payType"];
        $grn->bulckPrice = $data["bulckPrice"];
        $grn->actualBulkPrice = $data["actualBulkPrice"];
        $grn->grnRecorderID = $data["grnRecorderID"];
        $grn->dueDate = $dueDate;
        $grn->remarks = $remarks;
        $data->update($grn);

        $data->dueDate = $dueDate;
        $data->remarks = $remarks;*/

        $stockQty = DB::table("stocks")->where('stockID', $data["stockID"])->pluck('qty');
        $stockQty = (int)substr($stockQty, 1, -1);
        $oldgrnQty = DB::table("good_receiving_notes")->where('stockID', $data["stockID"])->pluck('grnQty');
        $oldgrnQty = (int)substr($oldgrnQty, 1, -1);
        if($oldgrnQty>=$grnQty){
            $value = $stockQty - ($oldgrnQty - $grnQty);
            if($value >=0){
                DB::table('stocks')->where('stockID', (int)$data["stockID"])->update(array('qty' => $value));
                $grn->update($data);
                return response()->json($grn, 200);
            }
            else{
                return response()->json("Stock ballence not enough.", 204);
            }
        }
        elseif($oldgrnQty<$grnQty){
            $value = $stockQty + ($grnQty - $oldgrnQty);
            if($value >=0){
                DB::table('stocks')->where('stockID', (int)$data["stockID"])->update(array('qty' => $value));
                $grn->update($data);
                return response()->json($grn, 200);
            }
            else{
                return response()->json("Stock ballence not enough.", 204);
            }
        }
    }
}
