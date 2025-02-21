<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('author')->insert([
            ['name' => 'Sam Haft'],
            ['name' => 'Baba Okina'],
            ['name' => 'Max0r'],
            ['name' => 'CD Projekt RED'],
            ['name' => 'Steven Spielberg'],
            ['name' => 'Gore Verbinski'],
            ['name' => 'Álex Pina'],
            ['name' => 'HoYoverse'],
            ['name' => 'Madhouse'],
            ['name' => 'TurtleMe'],
            ['name' => 'Sing Shong'],
            ['name' => 'Daisuke Aizawa'],
            ['name' => 'Hwandaeng'],
            ['name' => '8bit'],
            ['name' => 'MAPPA'],
            ['name' => 'Sunrise'],
            ['name' => 'Powerhouse Animation Studios'],
            ['name' => 'Satelight'],
            ['name' => 'Trigger'],
            ['name' => 'Doga Kobo'],
            ['name' => 'Chugong'],
        ]);
    }
}
