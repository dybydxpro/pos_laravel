<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <style>
            .con {
                width:500px
            }
        </style>
        <title>React App</title>
    </head>
    <body>
        <div class="con">
            <br/>
            @php
                $billDate = 0;
                $billNumber = 0;
            @endphp
            @foreach($data as $datas)
                @php
                    $billDate = $datas->billDate;
                    $billNumber = $datas->billID;
                @endphp
            @endforeach
            <div>
                <div>
                    Bill Date: {{ $billDate }}
                </div>
                <div>
                    Bill Number: BLW{{ $billNumber }}
                </div>
            </div>
            
            <div>
                <h3 class="text-center">List of Items. </h3>
            </div>
            <div class="">
                <table class="table">
                @php
                    $count = 0;
                    $totalcp = 0;
                    $totalsp = 0;
                @endphp
                    <thead class="">
                        <tr class="text-center align-middle">
                            <th scope="col" width="230px">Item Name</th>
                            <th scope="col" width="90px">Unit</th>
                            <th scope="col" width="90px">Qty</th>
                            <th scope="col" width="90px">Price</th>
                            <th scope="col" width="110px">Price with disc.</th>
                        </tr>
                    </thead>
                    </hr>
                    <tbody>
                    @foreach($data as $datas)
                        <tr class="">
                            <th class="text-left">{{ $datas->item}}</th>
                            <td class="text-center">{{ $datas->unit }}</td>
                            <td class="text-end">{{ $datas->cartQty }}</td>
                            <td class="text-end">{{ $datas->cartPrice }}</td>
                            <td class="text-end">{{ $datas->sellPrice }}</td>
                        </tr>
                        @php
                            ++$count;
                            $totalcp += $datas->cartPrice;
                            $totalsp += $datas->sellPrice;
                        @endphp
                    @endforeach
                    </tbody>
                    <tfoot>
                        <tr class="">
                            <th scope="col">No. of Items: &nbsp;&nbsp; {{ $count }}</th>
                            <th scope="col"></th>
                            <th scope="col" class="text-center">Total (Rs.):</th>
                            <th scope="col" class="text-end">{{ $totalcp }}</th>
                            <th scope="col" class="text-end">{{ $totalsp }}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>    
	</body>
</html>