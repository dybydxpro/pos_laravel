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
            $table->integer("itemID");
            $table->integer("stockID");
            $table->float("grnQty");
            $table->string("payType");
            $table->float("bulckPrice");
            $table->float("actualBulkPrice");
            $table->integer("grnRecorderID");
            $table->date("dueDate")->nullable();
            $table->longText("remarks")->nullable();
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
