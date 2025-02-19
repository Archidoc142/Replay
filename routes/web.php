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
        'books'  => EntityResource::collection(Entity::where('id_category', 1)->take(8)->get()),
        'musics' => EntityResource::collection(Entity::where('id_category', 3)->take(8)->get()),
        'games'  => EntityResource::collection(Entity::where('id_category', 4)->take(8)->get()),
        'movies' => EntityResource::collection(Entity::where('id_category', 5)->take(8)->get()),
        'series' => EntityResource::collection(Entity::where('id_category', 6)->take(8)->get()),
        'animes' => EntityResource::collection(Entity::where('id_category', 8)->take(8)->get()),
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
