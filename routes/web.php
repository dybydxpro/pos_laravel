<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\GoodReceivingNoteController;


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
});

Route::prefix('/stock')->group(function () {
    Route::get('/', [StockController::class, 'getAllStock']); //OK
    Route::get('/{id}', [StockController::class, 'getByID']);  //OK
    Route::post('/add', [StockController::class, 'createStock']);  //OK
    Route::put('/edit', [StockController::class, 'editStock']);  //Not Developed for use
});

Route::prefix('/grn')->group(function () {
    Route::get('/', [GoodReceivingNoteController::class, 'getAllGRN']); //OK
    Route::get('/{id}', [GoodReceivingNoteController::class, 'grnGetByID']);  //OK
    Route::post('/add', [GoodReceivingNoteController::class, 'createGRN']);  //OK
    Route::put('/edit', [GoodReceivingNoteController::class, 'editGRN']);  //OK
});