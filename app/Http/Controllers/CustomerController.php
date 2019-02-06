<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return response()->json(['customers' => $customers], 200);
    }

    public function store(Request $request)
    {
        $customer = Customer::create($request->all());
        return response()->json(['customer' => $customer], 200);
    }

    public function show(Customer $customer)
    {
        return response()->json(['customer' => $customer], 200);
    }
}
