<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('menu_location')->nullable();
            $table->bigInteger('parent_id')->nullable()->unsigned();
            $table->string('name');
            $table->string('link')->nullable();
            $table->string('icon')->nullable();
            $table->integer('order');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('parent_id')->references('id')->on('menus');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
