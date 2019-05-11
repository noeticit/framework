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
            "layout" => nits_config('layout'),
            "domain_name" => nits_config('domain_name'),
            "language" => nits_config('language'),
            "timezone" => nits_config('timezone'),
        );
        
        return view('nitseditor::Admin.index', [ 'nitseditor' => json_encode($nitseditor)]);
    }
}
