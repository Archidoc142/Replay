<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\EntityResource;
use App\Models\Entity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $query = Entity::query();

        $categories = [];
        if ($request->book === "true") $categories[] = 1;   // ID pour "Livres"
        if ($request->anime === "true") $categories[] = 2;  // ID pour "Animes"
        if ($request->music === "true") $categories[] = 3;  // ID pour "Musiques"
        if ($request->game === "true") $categories[] = 4;   // ID pour "Jeux vidéo"
        if ($request->video === "true") $categories[] = 5;  // ID pour "Vidéos"
        if ($request->serie === "true") $categories[] = 6;  // ID pour "Séries"
        if ($request->movie === "true") $categories[] = 7;  // ID pour "Films"
        if ($request->image === "true") $categories[] = 8;  // ID pour "Images"

        if (!empty($categories)) {
            $query->whereIn('id_category', $categories);
        }

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->search . '%')
                    ->orWhereHas('author', function ($q) use ($request) {
                        $q->where('name', 'LIKE', '%' . $request->search . '%');
                    });
            });
        }

        $results = $query->paginate(10);

        $filters = array_map(function ($value) {
            if ($value === "true" || $value === "false") return filter_var($value, FILTER_VALIDATE_BOOLEAN);
            if (is_numeric($value)) return $value + 0;
            return $value;
        }, $request->query());

        return Inertia::render('Search', [
            'results' => EntityResource::collection($results),
            'filters' => $filters,
        ]);
    }

    public function populaire(Request $request)
    {
        return Inertia::render('Search', [
            'results' => EntityResource::collection(Entity::orderByRaw('CAST(JSON_UNQUOTE(JSON_EXTRACT(meta, "$.note")) AS DECIMAL) DESC')->paginate(10)),
        ]);
    }
}
