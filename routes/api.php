<?php

use App\Http\Controllers\APIController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\EnsureUserIsLoggedIn;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
