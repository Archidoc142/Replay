<?php

use App\Http\Controllers\EntityController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Accueil');
})->name('home');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::get('/playlists', function () {
    return Inertia::render('Playlists');
})->name('playlists');

Route::controller(EntityController::class)->group(function() {
    Route::get('/entity', 'create')->name('newEntity')->middleware(EnsureUserIsLoggedIn::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->middleware(EnsureUserIsLoggedIn::class);;

require __DIR__.'/auth.php';
