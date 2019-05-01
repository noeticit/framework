<?php

use Illuminate\Database\Seeder;


class AppSettingsTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('app_settings')->insert([
            [
                'key' => 'app_name',
                'value' => 'NitsEditor App'
            ],
            [
                'key' => 'title',
                'value' => 'Nitseditor admin panel'
            ],
            [
                'key' => 'layout',
                'value' => '1'
            ]
        ]);
    }
}
