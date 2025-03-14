<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CharacterController;
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
    $images = Entity::where('id_category', 8)
        ->where('meta->type', 'desktop')
        ->get();

    $fan_art = Entity::where('id_category', 8)
        ->where('meta->type', 'fan_art')
        ->get();

    return Inertia::render('Accueil', [
        'last_items' => EntityResource::collection(Entity::whereIn('id_category', [1, 2, 4, 6, 7])->orderBy('id', 'desc')->take(15)->get()),
        'musics' => EntityResource::collection(Entity::where('id_category', 3)->inRandomOrder()->take(15)->get()),
        'images_main' => EntityResource::collection($images->shuffle()->take(5)),
        'images_d' => EntityResource::collection($images->shuffle()->take(5)),
        'images_f' => EntityResource::collection($fan_art->shuffle()->take(5)),
        'video' => EntityResource::collection(Entity::where('id_category', 5)->inRandomOrder()->take(8)->get()),
    ]);
})->name('home');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::controller(SearchController::class)->group(function () {
    Route::get('/search', 'index')->name('search');
    Route::get('/search/populaire', 'populaire')->name('search.populaire');
});

Route::controller(PlaylistController::class)->group(function () {
    Route::get('/playlists', 'index')->name('playlists')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/playlist/{id}', 'show')->name('playlist')->middleware(EnsureUserIsLoggedIn::class);

    Route::post('/addToList', 'toggle')->name('addToList')->middleware(EnsureUserIsLoggedIn::class);
    Route::post('/playlist', 'store')->name('createPlaylist')->middleware(EnsureUserIsLoggedIn::class);

    Route::delete('/playlist/delete/{id}', 'destroy')->name('playlist.destroy')->middleware(EnsureUserIsLoggedIn::class);
});

Route::controller(AdminController::class)->group(function () {
    Route::get('/modify/{id}', 'index')->name('modify')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/modify/entity/{id}', 'show')->name('modify.category')->middleware(EnsureUserIsLoggedIn::class);
});

Route::controller(EntityController::class)->group(function () {
    Route::get('/entity', 'create')->name('createEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::post('/entity', 'store')->name('storeEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/entity/{category}/{id}', 'show')->name('showEntity');

    Route::put('/entity/modify/{id}', 'update')->name('entity.update')->middleware(EnsureUserIsLoggedIn::class);
    Route::delete('/entity/modify/{id}', 'destroy')->name('entity.destroy')->middleware(EnsureUserIsLoggedIn::class);
});

Route::controller(CharacterController::class)->group(function () {
    Route::get('/character', 'create')->name('character.create')->middleware(EnsureUserIsLoggedIn::class);
    Route::post('/character', 'store')->name('character.store')->middleware(EnsureUserIsLoggedIn::class);

    Route::put('/characterAdd', 'AddCharacterToEntity')->name('character.AddCharacterToEntity')->middleware(EnsureUserIsLoggedIn::class);
    Route::delete('/character', 'destroy')->name('character.destroy')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/character/{id}', 'show')->name('character.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit')->middleware(EnsureUserIsLoggedIn::class);
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update')->middleware(EnsureUserIsLoggedIn::class);
});

require __DIR__ . '/auth.php';
