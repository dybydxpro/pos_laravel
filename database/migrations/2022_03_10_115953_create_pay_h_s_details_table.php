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
        Schema::create('pay_h_s_details', function (Blueprint $table) {
            $table->id("payID");
            $table->integer("billID");
            $table->string("payType");
            $table->integer("payblePrice");
            $table->string("dueDate");
            $table->string("remakes");
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
        Schema::dropIfExists('pay_h_s_details');
    }
};
