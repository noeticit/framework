<?php

namespace Nitseditor\Framework\ServiceProviders;

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;
use Nitseditor\Framework\Commands\CreateCrudCommand;
use Nitseditor\Framework\Commands\CreateDatabaseCommand;
use Nitseditor\Framework\Commands\CreatePluginCommand;
use Nitseditor\Framework\Commands\CreateRequestCommand;
use Nitseditor\Framework\Commands\MakeControllerCommand;
use Nitseditor\Framework\Commands\MakeModelCommand;

class FrameworkServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function boot()
    {
        //Load NitsEditor Views.
        $this->loadViewsFrom(__DIR__ . '/../Frontend', 'nitseditor');


    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function register()
    {

        //Register migrations and commands.
        if ($this->app->runningInConsole()) {

            $this->loadMigrationsFrom(__DIR__.'/../Database/migrations');

            $this->registerCommands();
        }

        // Load the helpers in NitsEditor
        require __DIR__ .'/../Helpers/helpers.php';

        //Plugins migrations, factories and seeder.
        foreach (nits_plugins() as $package) {
            $namespace = nits_get_plugin_config($package.'.namespace');
            if($namespace)
            {
                if ($this->app->runningInConsole()) {
                    if(File::exists(base_path().'/plugins/'. $namespace .'/Databases/Migrations'))
                        $this->loadMigrationsFrom(base_path().'/plugins/'. $namespace .'/Databases/Migrations');

                    if(File::exists(base_path().'/plugins/'. $namespace . '/Databases/Factories'))
                    {
                        $this->app->singleton(Factory::class, function () use($namespace){
                            $faker = $this->app->make(Faker::class);
                            return Factory::construct($faker,base_path().'/plugins/'. $namespace . '/Databases/Factories');
                        });
                    }
                }
            }

        }
    }

    /**
     * Register Commands.
     *
     * @return void
     */
    public function registerCommands()
    {
        $this->commands([
            CreatePluginCommand::class,
            MakeModelCommand::class,
            MakeControllerCommand::class,
            CreateDatabaseCommand::class,
            CreateRequestCommand::class,
            CreateCrudCommand::class,
        ]);
    }
}
