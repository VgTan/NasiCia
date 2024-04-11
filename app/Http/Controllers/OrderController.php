<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function order(Request $request) {
        $validate = $request->validate([

        ])
        // Order::create($request->all());
    }
}
