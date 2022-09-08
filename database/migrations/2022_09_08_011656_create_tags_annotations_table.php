<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags_annotations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('annotation_id');
            $table->foreignId('tag_id');
            $table->timestamps();

            $table->foreign('annotation_id')
                ->references('id')
                ->on('annotations')
                ->cascadeOnDelete();

            $table->foreign('tag_id')
                ->references('id')
                ->on('tags')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tags_annotations');
    }
};
