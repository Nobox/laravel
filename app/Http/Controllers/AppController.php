<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
    /**
     * Show the application index page.
     *
     * @return Response
     */
    public function index()
    {
        return view('index');
    }
}
