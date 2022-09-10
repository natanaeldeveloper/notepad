<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials, $request->remember)) {
            throw (new HttpException(401, 'Unauthorized.'));
        }

        return response()->json([
            'status' => 200,
            'title'  => 'Successiful authentication.',
            'user'   => Auth::user()
        ]);
    }
}
