<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany; // Ajout de HasMany
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'email',
        'name',
        'password',
        'id_img'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Relation avec l'image de l'utilisateur.
     */
    public function image(): BelongsTo
    {
        return $this->belongsTo(Image::class, 'id_img');
    }

    /**
     * Relation avec les playlists partagées.
     */
    public function sharedPlaylists(): BelongsToMany
    {
        return $this->belongsToMany(Playlist::class, 'playlist_user', 'id_user', 'id_playlist');
    }

    /**
     * Relation avec les playlists créées par l'utilisateur.
     */
    public function playlists(): HasMany
    {
        return $this->hasMany(Playlist::class, 'id_user');
    }
}
