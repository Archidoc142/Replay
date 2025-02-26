<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Playlist;
use Illuminate\Support\Facades\Auth;

class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(Playlist $play)
    {
        //
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
    public function destroy(Playlist $play)
    {
        //
    }
}
