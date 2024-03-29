<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/user/login', '/user/create', '/user/edit', '/user/resetpassword',
        '/item/add','/item/edit',
        '/stock/add',
        '/grn/add','/grn/edit',
        '/cart/addDataToCart',
        '/holesalecart/addDataToHSCart',
        '/pay/add', '/payhs/add'
        
    ];
}
