<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function register(StoreUserRequest $request)
    {
        dd($request->validated());
    }
}
