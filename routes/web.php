<?php

use App\Http\Controllers\EntityController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Resources\EntityResource;
use App\Models\Entity;

Route::get('/', function () {
    return Inertia::render('Accueil', [
        'last_items' => EntityResource::collection(Entity::whereIn('id_category', [1, 2, 4, 6, 7]) ->orderBy('id', 'desc')->take(19)->get()),
    ]);
})->name('home');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::get('/playlists', function () {
    return Inertia::render('Playlists');
})->name('playlists');

Route::controller(EntityController::class)->group(function() {
    Route::get('/entity', 'create')->name('createEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::post('/entity', 'store')->name('storeEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/entity/{category}/{id}', 'show')->name('showEntity');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->middleware(EnsureUserIsLoggedIn::class);;

require __DIR__.'/auth.php';
