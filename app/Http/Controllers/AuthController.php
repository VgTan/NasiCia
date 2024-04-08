<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function LoginPage() {
        $aa = 1;
        return Inertia::render('admin/Login' , [
        ]);
    }
}
