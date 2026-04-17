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
       Schema::create('etudiants', function (Blueprint $table) {
    $table->id();
    $table->string('login');
    $table->string('pass');
    $table->string('nom');
    $table->integer('note1');
    $table->integer('note2');
    $table->float('moyenne');
    $table->float('longitude');
    $table->float('latitude');
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('etudiants');
    }
};
