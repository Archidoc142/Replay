<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CharacterResource extends JsonResource
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
            "theme_color" => $this->theme_color,
            "name" => $this->name,
            "meta" => $this->meta,
            "description" => $this->description,
            "images" => $this->images,
            "vignette" => $this->vignette,
        ];
    }
}
