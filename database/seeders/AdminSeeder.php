<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                "name" => "Archidoc",
                "email" => "ardyn142@gmail.com",
                "password" => Hash::make("admin"),
                "id_img" => 1
            ]
        ]);
    }
}
