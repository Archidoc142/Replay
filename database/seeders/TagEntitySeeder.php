<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagEntitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tag_entity')->insert([
            ["id" => 1, "id_entity" => 2, "id_tag" => 1],
            ["id" => 2, "id_entity" => 2, "id_tag" => 2],
            ["id" => 3, "id_entity" => 2, "id_tag" => 7],
            ["id" => 4, "id_entity" => 2, "id_tag" => 15],
            ["id" => 5, "id_entity" => 4, "id_tag" => 1],
            ["id" => 6, "id_entity" => 4, "id_tag" => 13],
            ["id" => 7, "id_entity" => 4, "id_tag" => 8],
            ["id" => 8, "id_entity" => 4, "id_tag" => 3],
            ["id" => 9, "id_entity" => 6, "id_tag" => 1],
            ["id" => 10, "id_entity" => 7, "id_tag" => 1],
            ["id" => 11, "id_entity" => 7, "id_tag" => 4],
            ["id" => 12, "id_entity" => 9, "id_tag" => 1],
            ["id" => 13, "id_entity" => 9, "id_tag" => 6],
            ["id" => 14, "id_entity" => 10, "id_tag" => 6],
            ["id" => 15, "id_entity" => 10, "id_tag" => 7],
            ["id" => 16, "id_entity" => 10, "id_tag" => 1],
            ["id" => 17, "id_entity" => 11, "id_tag" => 1],
            ["id" => 18, "id_entity" => 11, "id_tag" => 3],
            ["id" => 19, "id_entity" => 11, "id_tag" => 2],
            ["id" => 20, "id_entity" => 11, "id_tag" => 7],
            ["id" => 21, "id_entity" => 12, "id_tag" => 1],
            ["id" => 22, "id_entity" => 12, "id_tag" => 4],
            ["id" => 23, "id_entity" => 12, "id_tag" => 6],
            ["id" => 24, "id_entity" => 16, "id_tag" => 1],
            ["id" => 25, "id_entity" => 17, "id_tag" => 1],
            ["id" => 26, "id_entity" => 17, "id_tag" => 7],
            ["id" => 27, "id_entity" => 18, "id_tag" => 4],
            ["id" => 28, "id_entity" => 18, "id_tag" => 1],
            ["id" => 29, "id_entity" => 18, "id_tag" => 6],
            ["id" => 30, "id_entity" => 19, "id_tag" => 1],
            ["id" => 31, "id_entity" => 19, "id_tag" => 7],
            ["id" => 32, "id_entity" => 19, "id_tag" => 15],
            ["id" => 33, "id_entity" => 20, "id_tag" => 1],
            ["id" => 34, "id_entity" => 20, "id_tag" => 6],
            ["id" => 35, "id_entity" => 21, "id_tag" => 1],
            ["id" => 36, "id_entity" => 21, "id_tag" => 4],
            ["id" => 37, "id_entity" => 22, "id_tag" => 1],
            ["id" => 38, "id_entity" => 23, "id_tag" => 1],
            ["id" => 39, "id_entity" => 23, "id_tag" => 2],
            ["id" => 40, "id_entity" => 23, "id_tag" => 6],
            ["id" => 41, "id_entity" => 24, "id_tag" => 1],
            ["id" => 42, "id_entity" => 24, "id_tag" => 13],
            ["id" => 43, "id_entity" => 25, "id_tag" => 1],
            ["id" => 44, "id_entity" => 25, "id_tag" => 2],
            ["id" => 45, "id_entity" => 25, "id_tag" => 7],
            ["id" => 46, "id_entity" => 27, "id_tag" => 1],
            ["id" => 47, "id_entity" => 27, "id_tag" => 3],
            ["id" => 48, "id_entity" => 27, "id_tag" => 6],
        ]);
    }
}
