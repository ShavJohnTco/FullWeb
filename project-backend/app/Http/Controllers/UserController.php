<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\Register;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Register $request)
    {
        User::query() -> create([
            'first_name' => $request -> get('first_name'),
            'last_name' => $request -> get('last_name'),
            'email' => $request -> get('email'),
            'password' => Hash::make($request -> get('first_name')),
        ]);

        return response()->json([
            'success' => true,
            'massage' => 'User successfully registerd'
        ]);
    }
}
