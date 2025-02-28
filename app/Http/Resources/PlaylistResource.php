<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlaylistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "id_category" => $this->id_category,
            "name" => $this->name,
            "nb_items" => $this->nb_items,
            "file_path" => $this->file_path,
            "entities" => $this->entities,
        ];
    }
}
