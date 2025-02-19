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
        Schema::create('character', function (Blueprint $table) {
            $table->id();
            $table->string('theme_color')->nullable();
            $table->string('name');
            $table->json('meta');
            $table->string('description')->nullable();
            $table->json('images');
            $table->string('vignette');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('character');
    }
};
