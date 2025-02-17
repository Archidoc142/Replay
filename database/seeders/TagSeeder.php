<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tag')->insert([
            ['name' => 'Action'],
            ['name' => 'Aventure'],
            ['name' => 'RPG'],
            ['name' => 'Stratégie'],
            ['name' => 'Platformer'],
            ['name' => 'Fantastique'],
            ['name' => 'Merveilleux'],
            ['name' => 'Science-fiction'],
            ['name' => 'Drame'],
            ['name' => 'Comédie'],
            ['name' => 'Romance'],
            ['name' => 'Historique'],
            ['name' => 'Cyberpunk'],
            ['name' => 'Steampunk'],
            ['name' => 'Réincarnation'],
        ]);
    }
}
