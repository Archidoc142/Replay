<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EntityResource extends JsonResource
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
            "title" => $this->title,
            "author" => $this->author?->name,
            "category" => $this->category->name,
            "meta" => json_decode($this->meta),
            "tags" => $this->tags->pluck('id'),
        ];
    }
}
