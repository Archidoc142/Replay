<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Character extends Model
{
    use HasFactory;

    protected $table = 'character';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'theme_color',
        'name',
        'meta',
        'description',
        'images',
        'vignette',
    ];

    public function entities() : BelongsToMany
    {
        return $this->belongsToMany(Entity::class, 'character_entity', 'id_character', 'id_entity');
    }
}
