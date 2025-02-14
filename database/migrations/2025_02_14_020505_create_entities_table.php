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
        Schema::create('entity', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('meta');
            $table->bigInteger('id_category')->unsigned();
            $table->bigInteger('id_author')->unsigned()->nullable();
        });

        Schema::table('entity', function (Blueprint $table) {
            $table->foreign('id_category')->references('id')->on('category');
            $table->foreign('id_author')->references('id')->on('author')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entity');
    }
};
