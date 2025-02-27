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
            $table->foreignId('id_entity')->constrained('entity')->onDelete('cascade');
            $table->foreignId('id_playlist')->constrained('playlist')->onDelete('cascade');
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
