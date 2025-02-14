<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CharacterEntity extends Pivot
{
    protected $table = 'character_entity';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable= [
        'id_entity',
        'id_character',
    ];

    public function entity(): BelongsTo
    {
        return $this->belongsTo(Entity::class, 'id_entity');
    }

    public function character(): BelongsTo
    {
        return $this->belongsTo(Character::class, 'id_character');
    }
}
