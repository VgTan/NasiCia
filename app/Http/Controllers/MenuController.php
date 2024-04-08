<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index() {
        $AllMenu = Menu::all();
        // dd($AllMenu);
        return Inertia::render('Home', [
            'menus'=> $AllMenu
        ]);
    }

}
