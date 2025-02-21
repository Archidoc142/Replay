<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlaylistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('playlist')->insert([
            [
               'name' => 'like',
               'file_path' => null,
               'id_user' => 1
            ],
            [
                'name' => 'signet',
                'file_path' => null,
                'id_user' => 1
            ]
        ]);
    }
}
