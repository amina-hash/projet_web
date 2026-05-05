<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    // LOGIN
   public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)
                ->where('password', $request->password)
                ->first();

    if (!$user) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    return response()->json([
        'message' => 'Login successful',
        'user' => $user->name
    ]);
}

    /**
     * Log out: revoke Sanctum bearer token when present; destroy web session when active.
     */
    public function logout(Request $request)
    {
        $plainTextToken = $request->bearerToken();
        if ($plainTextToken) {
            $accessToken = PersonalAccessToken::findToken($plainTextToken);
            if ($accessToken) {
                $accessToken->delete();
            }
        }

        if ($request->hasSession()) {
            Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }
}