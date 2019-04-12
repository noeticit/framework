<?php

namespace Nitseditor\Framework\Http\Controllers;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function admin()
    {
        return view('nitseditor::Admin.index');
    }
}
