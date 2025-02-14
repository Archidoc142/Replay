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
            ['name' => 'Survival Horror'],
            ['name' => 'Rogue-like'],
            ['name' => 'Sandbox'],
            ['name' => 'Simulation'],
            ['name' => 'Sport'],
            ['name' => 'Puzzle'],
            ['name' => 'Platformer'],
            ['name' => 'Battle Royale'],
            ['name' => 'MMO'],
            ['name' => 'Fantaisie'],
            ['name' => 'Science-fiction'],
            ['name' => 'Horreur'],
            ['name' => 'Thriller'],
            ['name' => 'Drame'],
            ['name' => 'Comédie'],
            ['name' => 'Romance'],
            ['name' => 'Historique'],
            ['name' => 'Policier'],
            ['name' => 'Western'],
            ['name' => 'Cyberpunk'],
            ['name' => 'Steampunk'],
            ['name' => 'Dystopie'],
            ['name' => 'Uchronie'],
        ]);
    }
}
