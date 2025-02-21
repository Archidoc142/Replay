<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserResource;
use App\Models\Playlist;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = null;
        $genres = Tag::all();

        if (!is_null($request->user())) {
            $user = new UserResource($request->user());
        }

        return [
            ...parent::share($request),

            'user' => $user,
            'genres' => $genres,
        ];
    }
}
