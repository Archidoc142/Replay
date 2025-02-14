<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('playlist_entity', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_entity')->unsigned();
            $table->bigInteger('id_playlist')->unsigned();
        });

        Schema::table('playlist_entity', function (Blueprint $table) {
            $table->foreign('id_entity')->references('id')->on('entity');
            $table->foreign('id_playlist')->references('id')->on('playlist');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('playlist_entity');
    }
};
