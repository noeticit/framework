<?php

namespace Nitseditor\Framework\Http\Controllers;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function admin()
    {
        $nitseditor = array(
            "app_name" => nits_config('app_name'),
            "domain_name" => nits_config('domain_name'),
            "language" => nits_config('language'),
            "timezone" => nits_config('timezone'),
            "client_id" => env('FRONT_END_CLIENT_ID'),
            "client_secret" => env('FRONT_END_CLIENT_SECRET')
        );
        
        return view('nitseditor::Admin.index', [ 'nitseditor' => json_encode($nitseditor)]);
    }
}
