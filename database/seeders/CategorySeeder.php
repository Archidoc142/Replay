<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category')->insert([
            ['name' => 'Livres'],
            ['name' => 'Animes'],
            ['name' => 'Musiques'],
            ['name' => 'Jeux'],
            ['name' => 'Vidéos'],
            ['name' => 'Séries'],
            ['name' => 'Films'],
            ['name' => 'Images'],
            ['name' => 'Toutes'],
        ]);
    }
}
