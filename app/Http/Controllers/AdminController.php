<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\EntityResource;
use App\Models\Category;
use App\Models\Entity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request, int $id) {
        $query = Entity::query();

        $query->where('id_category', $id);


        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->search . '%')
                    ->orWhereHas('author', function ($q) use ($request) {
                        $q->where('name', 'LIKE', '%' . $request->search . '%');
                    });
            });
        }

        $results = $query->paginate(10);

        return Inertia::render('Admin/Index', [
            'entities' => EntityResource::collection($results),
            'category' => Category::find($id)
        ]);
    }

    public function show(int $id) {
        return Inertia::render('Admin/ShowEntityForm', [
            'entity' => new EntityResource(Entity::find($id))
        ]);
    }
}
