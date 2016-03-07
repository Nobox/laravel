<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Route;

class RoutesTest extends TestCase
{
    public function test_all_get_routes_are_ok()
    {
        $routes = Route::getRoutes()->getRoutes();

        foreach ($routes as $route) {
            if (in_array('GET', $route->getMethods())) {
                $response = $this->call('GET', $route->getUri());
                $this->assertEquals(200, $response->status());
            }
        }
    }
}
