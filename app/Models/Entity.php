<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    protected $table = 'character';
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
}
