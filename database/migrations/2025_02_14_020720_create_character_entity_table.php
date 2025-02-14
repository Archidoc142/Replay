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
        Schema::create('character_entity', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_entity')->unsigned();
            $table->bigInteger('id_character')->unsigned();
        });

        Schema::table('character_entity', function (Blueprint $table) {
            $table->foreign('id_entity')->references('id')->on('entity');
            $table->foreign('id_character')->references('id')->on('character');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('character_entity');
    }
};
