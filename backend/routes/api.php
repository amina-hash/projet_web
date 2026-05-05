<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MapController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/etudiants', [EtudiantController::class, 'store']);
Route::get('/etudiants', [EtudiantController::class, 'index']);
Route::get('/etudiants/{id}', [EtudiantController::class, 'show']);
Route::put('/etudiants/{id}', [EtudiantController::class, 'update']);
Route::post('/upload-image', [ImageController::class, 'upload']);
Route::get('/images', [ImageController::class, 'index']);
Route::get('/users', [MapController::class, 'index']);