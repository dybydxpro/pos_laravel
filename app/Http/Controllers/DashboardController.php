<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\HoleSales;
use App\Models\PayDetails;
use App\Models\PayHSDetails;

use Carbon\Carbon;

class DashboardController extends Controller
{
    function lessStock(){
        $data = DB::table('stocks')
            ->join('items','items.itemID', '=', 'stocks.itemID')
            ->where('qty', "<=", 5)->get();
        return response()->json($data, 200);
    }

    function topSellItem(){
        $data = DB::table('sales')
            ->join('items','items.itemID', '=', 'sales.itemID')
            ->selectRaw('items.itemID, items.item, count(sales.itemID) total')
            ->groupBy('items.itemID')
            ->orderBy('total','desc')
            ->take(10)
            ->get();
        return response()->json($data, 200);
    }

    function topHSSellItem(){
        $data = DB::table('hole_sales')
            ->join('items','items.itemID', '=', 'hole_sales.itemID')
            ->selectRaw('items.itemID, items.item, count(hole_sales.itemID) total')
            ->groupBy('items.itemID')
            ->orderBy('total','desc')
            ->take(10)
            ->get();
        return response()->json($data, 200);
    }

    function getSalePayment(){
        $today = Carbon::now();
        $afterTwoWeeks = Carbon::now()->addDays(14);
        $from =  $today->toDateTimeString();
        $to = $afterTwoWeeks->toDateTimeString();
        $data = DB::table('pay_details')
            ->orderBy('dueDate','asc')
            ->where('dueDate', '>=', $from)
            ->where('dueDate', '<', $to)
            ->get();
        return response()->json($data, 200);
    }

    function getHoleSalePayment(){
        $today = Carbon::now();
        $afterTwoWeeks = Carbon::now()->addDays(14);
        $from =  $today->toDateTimeString();
        $to = $afterTwoWeeks->toDateTimeString();
        $data = DB::table('pay_h_s_details')
            ->orderBy('dueDate','asc')
            ->where('dueDate', '>=', $from)
            ->where('dueDate', '<', $to)
            ->get();
        return response()->json($data, 200);
    }


    function chartData(){
        $data = Sales::select(DB::raw('SUM(sellPrice) as `data`'),DB::raw("DATE_FORMAT(created_at, '%Y-%m') labels"))
                ->groupBy('labels')->orderBy('labels')->get();
        return response()->json($data, 200);
    }

    function dailyChartData(){
        $data = Sales::select(DB::raw('SUM(sellPrice) as `data`'),DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d') labels"))
                ->groupBy('labels')->orderBy('labels')->take(14)->get();
        return response()->json($data, 200);
    }

    function holesaleChartData(){
        $data = HoleSales::select(DB::raw('SUM(sellPrice) as `data`'),DB::raw("DATE_FORMAT(created_at, '%Y-%m') labels"))
                ->groupBy('labels')->orderBy('labels')->get();
        return response()->json($data, 200);
    }

    function holesaleDailyChartData(){
        $data = HoleSales::select(DB::raw('SUM(sellPrice) as `data`'),DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d') labels"))
                ->groupBy('labels')->orderBy('labels')->take(14)->get();
        return response()->json($data, 200);
    }
}
