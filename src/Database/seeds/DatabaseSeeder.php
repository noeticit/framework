<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         $this->call(UsersTableSeeder::class);
//         $this->call(AppSettingsTableSeeder::class);
        $this->call(\Nitseditor\Plugins\Confidence\Databases\seeds\InstallSeeder::class);
    }
}
