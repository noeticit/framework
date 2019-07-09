<?php

Route::get('/', function () {
    return view('nitseditor::Website.welcome');
});

Route::get('/admin/{view?}', 'HomeController@admin')->where('view', '(.*)')->name('nitseditor.admin');
