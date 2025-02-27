<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Playlist extends Model
{
    use HasFactory;

    protected $table = 'playlist';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'file_path',
        'id_user',
        'id_category',
        'nb_items'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    // Relation avec table Pivot

    public function entities(): BelongsToMany
    {
        return $this->belongsToMany(Entity::class, 'playlist_entity', 'id_playlist', 'id_entity');
    }
}
