<?php

namespace App\Http\Middleware;

use App\Http\Resources\PlaylistResource;
use App\Http\Resources\UserResource;
use App\Models\Playlist;
use App\Models\PlaylistEntity;
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

        $like_playlist_id = null;
        $signet_playlist_id = null;

        $like_playlist_array = null;
        $signet_playlist_array = null;

        $playlistsFromUser = null;

        if (!is_null($request->user())) {
            $user = new UserResource($request->user());

            $like_playlist_id = Playlist::where('id_user', $user->id)->pluck('id')->first();
            $signet_playlist_id = Playlist::where('id_user', $user->id)->pluck('id')->skip(1)->first();

            $like_playlist_array = PlaylistEntity::where('id_playlist', $like_playlist_id)->pluck('id_entity')->toArray();
            $signet_playlist_array = PlaylistEntity::where('id_playlist', $signet_playlist_id)->pluck('id_entity')->toArray();

            $playlistsFromUser = PlaylistResource::collection(Playlist::where('id_user', $user->id)
                ->whereNotIn('name', ['like', 'signet'])
                ->get());
        }

        return [
            ...parent::share($request),

            'user' => $user,
            'genres' => $genres,

            'like_playlist_id' => $like_playlist_id,
            'signet_playlist_id' => $signet_playlist_id,

            'like_playlist_array' => $like_playlist_array,
            'signet_playlist_array' => $signet_playlist_array,

            'playlistsFromUser' => $playlistsFromUser
        ];
    }
}
