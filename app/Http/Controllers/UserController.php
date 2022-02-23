<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function login(Request $request){
        $validated = $request->validate([
            'userName' => 'required',
            'password' => 'required',
        ]);

        $data = $request->all();
        $password = User::All()->where('userName', $data['userName'])->first()->password;

        if($password == ""){
            return response()->json("Email is wrong.", 400);
        }
        else{
            if($data['password'] == $password){
                $id = User::All()->where('userName', $data['userName'])->first()->_id;
                $userName = User::All()->where('userName', $data['userName'])->first()->userName;
                $returnData["id"] = $id;
                $returnData["userName"] = $userName;
                return response()->json($returnData, 200);
            }
            else{
                return response()->json("Wrong password.", 400);
            }
        }
    }
}
