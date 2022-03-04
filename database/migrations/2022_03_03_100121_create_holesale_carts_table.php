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
        Schema::create('holesale_carts', function (Blueprint $table) {
            $table->id('cartID');
            $table->integer('itemID');
            $table->integer('stockID');
            $table->float('cartQty');
            $table->float('cartPrice');
            $table->float('sellPrice');
            $table->integer('userID');
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
        Schema::dropIfExists('holesale_carts');
    }
};
