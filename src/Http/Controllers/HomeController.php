<?php

namespace Nitseditor\Framework\Http\Controllers;

use App\Http\Controllers\Controller;
use Nitseditor\Framework\Models\Menu;

class HomeController extends Controller
{
    public function admin()
    {
        $menus = Menu::tree();
        $nitseditor = array(
            "menu" => $menus,
            "app_name" => nits_config('app_name'),
            "app_logo" => nits_config('app_logo'),
            "layout" => nits_config('layout'),
            "domain_name" => nits_config('domain_name'),
            "language" => nits_config('language'),
            "timezone" => nits_config('timezone'),
            "login_title" => nits_config('login_title'),
            "login_subtitle" => nits_config('login_subtitle'),
            "copyright" => nits_config('copyright'),
        );

//        dd(nits_config('layout'));
        
        if(nits_config('layout') === '1')
            return view('nitseditor::Admin.layout1', [ 'nitseditor' => json_encode($nitseditor)]);
        elseif (nits_config('layout') === '2')
            return view('nitseditor::Admin.layout2', [ 'nitseditor' => json_encode($nitseditor)]);
        else
            return view('nitseditor::Admin.layout1', [ 'nitseditor' => json_encode($nitseditor)]);
    }
}
