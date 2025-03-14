<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CharacterResource;
use App\Http\Resources\EntityResource;
use App\Http\Resources\MinimizeCharacterResource;
use App\Models\Author;
use App\Models\Category;
use App\Models\Character;
use Illuminate\Http\Request;
use App\Models\Entity;
use App\Models\Playlist;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EntityController extends Controller
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
        return Inertia::render('Entity/CreateEntityForms', [
            'categories' => Category::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $meta = json_decode($request->meta, true);

        function saveImageWithoutDuplicate($file)
        {
            $filename = $file->getClientOriginalName();
            $file->move(public_path('img'), $filename);
            return $filename;
        }

        if ($request->hasFile('img_couverture')) {
            $meta['img_couverture'] = saveImageWithoutDuplicate($request->file('img_couverture'));
        }

        if ($request->hasFile('img_vignette')) {
            $meta['img_vignette'] = saveImageWithoutDuplicate($request->file('img_vignette'));
        }

        $entity = Entity::create([
            'title' => $request->title,
            'meta' => json_encode($meta),
            'id_category' => $request->id_category,
        ]);

        if (isset($request->author_name)) {
            $author = Author::firstOrCreate(
                ['name' => $request->author_name],
                ['name' => $request->author_name]
            );

            $entity->id_author = $author->id;
            $entity->save();
        }

        if (!empty($request->tags_form)) {
            $entity->tags()->syncWithoutDetaching($request->tags_form);
        }

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $category = Category::where('name', $request->category)->first();

        return Inertia::render('Entity/Entity', [
            'categorie' => $category,
            'informations' => new EntityResource(Entity::find($request->id)),
            'plFromUser' => Auth::check() ? Playlist::whereIn('id_category', [$category->id, 9])->where('id_user', Auth::id())->get() : collect(),
            'characters' => MinimizeCharacterResource::collection(Character::all()),
            'charactersFromEntity' => Entity::find($request->id)->characters->pluck('id'),
            'simContent' => EntityResource::collection(Entity::where('id_category', $category->id)->when($request->id, fn($query) => $query->where('id', '!=', $request->id))->inRandomOrder()->take(8)->get()),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Entity $play)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $entity = Entity::find($id);

        $entity->title = $request->title;
        $entity->meta = $request->meta;

        $entity->tags()->sync($request->tags_form);

        $entity->save();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $entity = Entity::find($request->id);
        $entity->delete();

        return Redirect::to('/modify/' . $request->id_category);
    }
}
