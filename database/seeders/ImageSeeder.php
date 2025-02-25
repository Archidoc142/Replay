<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('image')->insert([
            [
                "file_name" => "Aether.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Lumine.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Venti.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Zhongli.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Ei.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Nahida.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Furina.webp",
                "is_profil" => true,
            ],
            [
                "file_name" => "Mavuika.webp",
                "is_profil" => true,
            ],
        ]);
    }
}
