<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Entity extends Model
{
    protected $table = 'entity';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'title',
        'meta',
        'id_category',
        'id_author',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'id_category');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class, 'id_author');
    }

    // Relation avec tables Pivot

    public function tags() : BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'tag_entity', 'id_entity', 'id_tag');
    }

    public function characters() : BelongsToMany
    {
        return $this->belongsToMany(Character::class, 'character_entity', 'id_entity', 'id_character');
    }

    public function playlists() : BelongsToMany
    {
        return $this->belongsToMany(Playlist::class, 'playlist_entity', 'id_entity', 'id_playlist');
    }
}
