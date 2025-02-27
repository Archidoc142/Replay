<?php

use App\Http\Controllers\EntityController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Resources\EntityResource;
use App\Models\Entity;

Route::get('/', function () {
    return Inertia::render('Accueil', [
        'last_items' => EntityResource::collection(Entity::whereIn('id_category', [1, 2, 4, 6, 7]) ->orderBy('id', 'desc')->take(19)->get()),
        'musics' => EntityResource::collection(Entity::where('id_category', 3) ->orderBy('id', 'desc')->take(8)->get()),
    ]);
})->name('home');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::controller(PlaylistController::class)->group(function() {
    Route::get('/playlists', 'index')->name('playlists');
    Route::get('/playlist/{id}', 'show')->name('playlist');
    Route::post('/addToList', 'toggle')->name('addToList');
    Route::post('/playlist', 'store')->name('createPlaylist');
    Route::delete('/playlist/delete/{id}', 'destroy')->name('playlist.destroy');
})->middleware(EnsureUserIsLoggedIn::class);

Route::controller(EntityController::class)->group(function() {
    Route::get('/entity', 'create')->name('createEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::post('/entity', 'store')->name('storeEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/entity/{category}/{id}', 'show')->name('showEntity');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
})->middleware(EnsureUserIsLoggedIn::class);

require __DIR__.'/auth.php';
