<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class TagEntity extends Pivot
{
    protected $table = 'tag_entity';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable= [
        'id_entity',
        'id_tag',
    ];

    public function entity(): BelongsTo
    {
        return $this->belongsTo(Entity::class, 'id_entity');
    }

    public function tag(): BelongsTo
    {
        return $this->belongsTo(Tag::class, 'id_tag');
    }
}
