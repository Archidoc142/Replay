<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CharacterResource;
use Illuminate\Http\Request;
use App\Models\Character;
use Inertia\Inertia;

class CharacterController extends Controller
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
        return Inertia::render('Character/CreateCharacterForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $images = json_decode($request->images, true);
        $vignette = $request->vignette;

        function saveImageWithoutDuplicate($file)
        {
            $filename = $file->getClientOriginalName();
            $file->move(public_path('img'), $filename);
            return $filename;
        }

        $images = array_map(function ($image) {
            unset($image['file']);
            return $image;
        }, $images);

        if ($request->hasFile('img_vignette')) {
            $vignette = saveImageWithoutDuplicate($request->file('img_vignette'));
        }

        Character::create([
            'theme_color' => $request->theme_color,
            'name' => $request->name,
            'meta' => $request->meta,
            'description' => $request->description,
            'images' => json_encode($images),
            'vignette' => $vignette
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        return Inertia::render('Character/Character', [
            'character' => new CharacterResource(Character::find($id))
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Character $play)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Character $play)
    {
        //
    }


    public function AddCharacterToEntity(Request $request)
    {
        $character = Character::find($request->id_character);

        $character->entities()->sync($request->id_entity);

        $character->save();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $character = Character::find($request->id);

        $character->entities()->detach($request->id_entity);

        $character->save();

        return back();
    }
}
