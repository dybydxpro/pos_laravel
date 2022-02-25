<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getAllUser(){
        $user = User::All("id", "name", "userName", "type");
        return response()->json($user, 200);
    }

    public function getByID($id){
        try{
            $user = User::Find($id);
            if($user != "[]"){
                $data = new User;
                $data->id = $user["id"];
                $data->name = $user["name"];
                $data->userName = $user["userName"];
                $data->type = $user["type"];
                return response()->json($data, 200);
            }
            else{
                return response()->json("User account not found!", 200);
            }
        }
        catch(Exception $e){
            return response()->json("User account not found!", 200);
        }
    }

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
                $id = User::All()->where('userName', $data['userName'])->first()->id;
                $userName = User::All()->where('userName', $data['userName'])->first()->userName;
                $type = User::All()->where('userName', $data['userName'])->first()->type;
                $returnData["id"] = $id;
                $returnData["userName"] = $userName;
                $returnData["type"] = $type;
                return response()->json($returnData, 200);
            }
            else{
                return response()->json("Wrong password.", 400);
            }
        }
    }

    public function createNew(Request $request){
        $validated = $request->validate([
            'name' => 'required',
            'userName' => 'required',
            'password' => 'required',
            'type' => 'required',
        ]);

        $user = new User;
        $data = $request->All();
        $user->name = $data['name'];
        $user->userName = $data['userName'];
        $user->password = $data['password'];
        $user->type = $data['type'];
        $user->save();
        return response()->json($user, 200);
    }

    public function updateUser(Request $request){
        $validated = $request->validate([
            'id' => 'required',
            'name' => 'required',
            'userName' => 'required',
            'type' => 'required',
        ]);

        $data = $request->All();
        $user = User::Find($data['id']);
        $user->id = $data['id'];
        $user->name = $data['name'];
        $user->userName = $data['userName'];
        $user->type = $data['type'];
        $user->update($data);
        return response()->json($user, 200);
    }

    public function resetPassword(Request $request){
        $validated = $request->validate([
            'id' => 'required',
            'password' => 'required',
        ]);

        $data = $request->All();
        $user = User::Find($data['id']);
        $user->id = $data['id'];
        $user->password = $data['password'];
        $user->update($data);
        return response()->json($user, 200);
    }
}
