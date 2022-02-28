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
        Schema::create('good_receiving_notes', function (Blueprint $table) {
            $table->id("grnID");
            $table->date("grnDate");
            $table->string("invoiceNo");
            $table->date("invoiceDate");
            $table->string("supplier");
            $table->integer("stockID");
            $table->float("qty");
            $table->string("payType");
            $table->date("duedate")->nullable();
            $table->longText("remarks");
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
        Schema::dropIfExists('good_receiving_notes');
    }
};
