<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\GoodReceivingNoteController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HoleSaleCartController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\HoleSalesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PayDetailsController;
use App\Http\Controllers\PayHSDetailsController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/user')->group(function () {
    Route::get('/', [UserController::class, 'getAllUser']);  //OK
    Route::get('/{id}', [UserController::class, 'getByID']);  //OK
    Route::get('/searchUser/{name}', [UserController::class, 'searchUser']);  //OK
    Route::post('/login', [UserController::class, 'login']);  //OK
    Route::post('/create', [UserController::class, 'createNew']);  //OK
    Route::put('/edit', [UserController::class, 'updateUser']);  //OK
    Route::put('/resetpassword', [UserController::class, 'resetPassword']); //OK 
});

Route::prefix('/item')->group(function () {
    Route::get('/', [ItemController::class, 'getAllItem']); //OK
    Route::get('/{id}', [ItemController::class, 'getByID']);  //OK
    Route::post('/add', [ItemController::class, 'createItem']); //OK
    Route::put('/edit', [ItemController::class, 'editItem']);  //OK
    Route::get('/searchByName/{name}', [ItemController::class, 'searchItemsByName']);  //OK
    Route::get('/forsele', [ItemController::class, 'getItemsForItems']); //OK

});

Route::prefix('/stock')->group(function () {
    Route::get('/', [StockController::class, 'getAllStock']); //OK
    Route::get('/{id}', [StockController::class, 'getByID']);  //OK
    Route::post('/add', [StockController::class, 'createStock']);  //OK
    Route::put('/edit', [StockController::class, 'editStock']);  //Not Developed for use
    Route::get('/searchByItemID/{id}', [StockController::class, 'searchStockByItemID']);  //OK
    Route::get('/searchStockByName/{name}', [StockController::class, 'searchStockByName']); //OK
    Route::get('/getAllStockQtyByID/{id}', [StockController::class, 'getAllStockQtyByID']);  //OK
    Route::get('/stockByID/{id}', [StockController::class, 'stockByID']);  //OK

});

Route::prefix('/grn')->group(function () {
    Route::get('/', [GoodReceivingNoteController::class, 'getAllGRN']); //OK
    Route::get('/{id}', [GoodReceivingNoteController::class, 'grnGetByID']);  //OK
    Route::get('/searchGRN/{search}', [GoodReceivingNoteController::class, 'searchGRN']);  //OK
    Route::post('/add', [GoodReceivingNoteController::class, 'createGRN']);  //OK
    Route::put('/edit', [GoodReceivingNoteController::class, 'editGRN']);  //OK
});

Route::prefix('/cart')->group(function () {
    Route::get('/getCartByName/{id}', [CartController::class, 'getCartItems']); //OK
    Route::post('/addDataToCart', [CartController::class, 'addDataToCart']);  //OK
    Route::get('/deleteCartItem/{id}', [CartController::class, 'deleteCartItem']); //OK - This is a delete method
});

Route::prefix('/holesalecart')->group(function () {
    Route::get('/getHSCartByName/{id}', [HoleSaleCartController::class, 'getHSCartItems']); //OK
    Route::post('/addDataToHSCart', [HoleSaleCartController::class, 'addDataToHSCart']);  //OK
    Route::get('/deleteHSCartItem/{id}', [HoleSaleCartController::class, 'deleteHSCartItem']); //OK - This is a delete method
});

Route::prefix('/sale')->group(function () {
    Route::get('/fetchAllBillItems', [SalesController::class, 'fetchAllBillItems']); //OK
    Route::get('/fetchAllBillItemsByBillID/{id}', [SalesController::class, 'fetchAllBillItemsByBillID']); //OK
    Route::get('/sellBillItems/{id}', [SalesController::class, 'sellBillItems']); //OK
    Route::get('/billFetch/{id}', [SalesController::class, 'billFetch']); //OK
    Route::get('/downloadBill/{id}', [SalesController::class, 'downloadBill']); //OK

    Route::get('/Bill/{id}', [SalesController::class, 'bill']); //OK
});

Route::prefix('/holesale')->group(function () {
    Route::get('/fetchAllBillItems', [HoleSalesController::class, 'fetchAllBillItems']); //OK
    Route::get('/fetchAllBillItemsByBillID/{id}', [HoleSalesController::class, 'fetchAllBillItemsByBillID']); //OK
    Route::get('/sellBillItems/{id}', [HoleSalesController::class, 'sellBillItems']); //OK
    Route::get('/billFetch/{id}', [HoleSalesController::class, 'billFetch']); //OK
    Route::get('/downloadBill/{id}', [HoleSalesController::class, 'downloadBill']); //OK

    
});

Route::prefix('/dashboard')->group(function () {
    Route::get('/lessStock', [DashboardController::class, 'lessStock']); //OK
    Route::get('/topSellItem', [DashboardController::class, 'topSellItem']); //
    Route::get('/topHSSellItem', [DashboardController::class, 'topHSSellItem']); //OK
    Route::get('/getSalePayment', [DashboardController::class, 'getSalePayment']); //
    Route::get('/getHoleSalePayment', [DashboardController::class, 'getHoleSalePayment']); //OK

    Route::get('/chartData', [DashboardController::class, 'chartData']); //OK
    Route::get('/dailyChartData', [DashboardController::class, 'dailyChartData']); //OK
    Route::get('/holesaleChartData', [DashboardController::class, 'holesaleChartData']); //OK
    Route::get('/holesaleDailyChartData', [DashboardController::class, 'getHoleSalePayment']); //OK
});

Route::prefix('/pay')->group(function () {
    Route::post('/add', [PayDetailsController::class, 'addPay']); //OK
    Route::get('/fetch', [PayDetailsController::class, 'fetchPay']); //OK
});

Route::prefix('/payhs')->group(function () {
    Route::post('/add', [PayHSDetailsController::class, 'addPay']); //OK
    Route::get('/fetch', [PayHSDetailsController::class, 'fetchPay']); //OK
});