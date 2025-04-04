<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ReservaController;
use App\Http\Controllers\Api\SolicitudTrabajoController;

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

Route::post('/reservas', [ReservaController::class, 'store']);
Route::post('/trabaja', [SolicitudTrabajoController::class, 'store']);
use App\Http\Controllers\Api\AdminReservaController;

Route::prefix('admin')->group(function () {
    Route::get('/reservas', [AdminReservaController::class, 'index']); // Ver todas las reservas
    Route::delete('/reservas/{id}', [AdminReservaController::class, 'destroy']); // Cancelar una reserva
});


use App\Http\Controllers\Api\AuthAdminController;

Route::post('/admin/login', [AuthAdminController::class, 'login']);
Route::middleware('auth:sanctum')->post('/admin/logout', [AuthAdminController::class, 'logout']);
