<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PlaylistEntity extends Pivot
{
    protected $table = 'playlist_entity';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable= [
        'id_entity',
        'id_playlist',
    ];

    public function entity(): BelongsTo
    {
        return $this->belongsTo(Entity::class, 'id_entity');
    }

    public function playlist(): BelongsTo
    {
        return $this->belongsTo(Playlist::class, 'id_playlist');
    }
}
