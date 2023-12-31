<?php

use App\Http\Controllers\Api\ColumnController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/columns',[ColumnController::class,'index']);


Route::group(['prefix'=>'task'],function (){
    Route::post('/',[TaskController::class,'create']);
    Route::delete('/{id}',[TaskController::class,'delete']);
    Route::get('/{id}',[TaskController::class,'getTask']);
    Route::patch('/{id}',[TaskController::class,'updateTask']);
    Route::patch('/status/{id}',[TaskController::class,'updateStatus']);
//    Route::post('/{id}',[TaskController::class,'updateTask']);
});

Route::group(['prefix'=>'post'],function (){
    Route::get('/all',[PostController::class,'getAllPosts']);
    Route::get('/{id}',[PostController::class,'findPostById']);
    Route::post('/',[PostController::class,'createPost']);
    Route::delete('/{id}',[PostController::class,'delete']);
    Route::patch('/{id}',[PostController::class,'updatePost']);
});
