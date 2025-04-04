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
    Schema::create('reservas', function (Blueprint $table) {
        $table->id();
        $table->string('nombre');
        $table->string('correo');
        $table->string('telefono');
        $table->date('fecha');
        $table->time('hora');
        $table->integer('comensales');
        $table->string('mesa')->nullable();
        $table->unsignedBigInteger('id_restaurante');
        $table->text('mensaje_opcional')->nullable();
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
        Schema::dropIfExists('reservas');
    }
};
