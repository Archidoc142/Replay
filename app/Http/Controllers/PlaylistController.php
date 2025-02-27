<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\EntityResource;
use App\Models\Category;
use App\Models\Entity;
use Illuminate\Http\Request;
use App\Models\Playlist;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Profile/Playlists', [
            'playlists' => Playlist::where('id_user', Auth::id())
                ->whereNotIn('name', ['like', 'signet'])
                ->get(),
            'categories' => Category::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        function saveImageWithoutDuplicate($file)
        {
            $filename = $file->getClientOriginalName();
            $file->move(public_path('img'), $filename);
            return $filename;
        }

        $filePath = null;

        if ($request->hasFile('file')) {
            $filePath = saveImageWithoutDuplicate($request->file('file'));
        }

        Playlist::create([
            'name' => $request->name,
            'file_path' => $filePath,
            'id_user' => Auth::id(),
            'id_category' => $request->id_category,
        ]);

        return back();
    }

    public function toggle(Request $request)
    {
        $playlist = Playlist::find($request->id_playlist);

        $playlist->entities()->toggle($request->id_entity);
        $playlist->nb_items = $playlist->entities()->count();

        $playlist->save();

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $playlist = Playlist::find($id);

        return Inertia::render('Profile/Playlist', [
            'entities' => EntityResource::collection($playlist->entities()->get()),
            'playlist' => $playlist
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Playlist $play)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Playlist $play)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $playlist = Playlist::find($id);

        $playlist->entities()->detach();

        $playlist->delete();

        return Redirect::to('/playlists');
    }
}
