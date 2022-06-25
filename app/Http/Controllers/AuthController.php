<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Resources\LoginUserResource;
use App\Http\Resources\RegisterUserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * User Register
     * 
     * @param RegisterUserRequest  $request
     * @return RegisterUserResource
     */
    public function register(RegisterUserRequest $request): RegisterUserResource
    {
        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password)
        ]);


        $token = $user->createToken('Personal Access Token')->plainTextToken;

        // asta o lasi pe alta data, ca dureaza prea mult; ramane butonul de remember me, dar nu face nimic
        // if ($request->remember_me) {
        //     $tokenResult->expires_at = Carbon::now()->addWeeks(1);
        // }
        // $tokenResult->save();

        return new RegisterUserResource(
            $user,
            $token
        );
    }

    /**
     * User Login
     * 
     * @param LoginUserRequest $request
     */
    public function login(LoginUserRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            $response = ['message' => "Can't find user with this email " . $request->email];
            return response()->json($response, 422);
        }

        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken('Personal Access Token')->plainTextToken;

            // if ($request->remember_me) {
            //     $token->expires_at = Carbon::now()->addWeeks(1);
            // }

            // $token->save();

            return new LoginUserResource(
                $user,
                $token
            );
        }
        
        $response = ['message' => 'Invalid user credentials..'];
        return response()->json($response, 422);
    }

    /**
     * Logout user
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->tokens()->delete();

        $response = ['message' => 'You have been logged out'];
        return response()->json($response, 200);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
