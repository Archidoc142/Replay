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
        Schema::create('tag_entity', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_entity')->unsigned();
            $table->bigInteger('id_tag')->unsigned();
        });

        Schema::table('tag_entity', function (Blueprint $table) {
            $table->foreign('id_entity')->references('id')->on('entity');
            $table->foreign('id_tag')->references('id')->on('tag');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tag_entity');
    }
};
