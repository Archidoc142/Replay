<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tag';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function entities() : BelongsToMany
    {
        return $this->belongsToMany(Entity::class, 'tag_entity', 'id_tag', 'id_entity');
    }
}
