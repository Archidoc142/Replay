<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\EntityController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Resources\EntityResource;
use App\Models\Entity;

Route::get('/', function () {
    return Inertia::render('Accueil', [
        'last_items' => EntityResource::collection(Entity::whereIn('id_category', [1, 2, 4, 6, 7])->orderBy('id', 'desc')->take(15)->get()),
        'musics' => EntityResource::collection(Entity::where('id_category', 3)->orderByRaw('RAND(?)', [now()->format('Y-m-d')])->take(8)->get()),
        'images' => EntityResource::collection(Entity::where('id_category', 8)->where('meta->type', 'desktop')->orderByRaw('RAND(?)', [now()->format('Y-m-d')])->take(5)->get()),
    ]);
})->name('home');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::controller(SearchController::class)->group(function () {
    Route::get('/search', 'index')->name('search');
});

Route::controller(PlaylistController::class)->group(function () {
    Route::get('/playlists', 'index')->name('playlists');
    Route::get('/playlist/{id}', 'show')->name('playlist');

    Route::post('/addToList', 'toggle')->name('addToList');
    Route::post('/playlist', 'store')->name('createPlaylist');

    Route::delete('/playlist/delete/{id}', 'destroy')->name('playlist.destroy');
})->middleware(EnsureUserIsLoggedIn::class);

Route::controller(AdminController::class)->group(function () {
    Route::get('/modify/{id}', 'index')->name('modify');
    Route::get('/modify/entity/{id}', 'show')->name('modify.category');
})->middleware(EnsureUserIsLoggedIn::class);

Route::controller(EntityController::class)->group(function () {
    Route::get('/entity', 'create')->name('createEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::post('/entity', 'store')->name('storeEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/entity/{category}/{id}', 'show')->name('showEntity');

    Route::get('/entity/modify/{id}', 'update')->name('entity.update');
    Route::get('/entity/modify/{id}', 'destroy')->name('entity.destroy');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
})->middleware(EnsureUserIsLoggedIn::class);

require __DIR__ . '/auth.php';
