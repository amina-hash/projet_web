<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Map;

class MapSeeder extends Seeder
{
    public function run()
    {
        Map::create([
            'first_name' => 'Ahmed',
            'last_name' => 'El Amrani',
            'latitude' => 33.5731,
            'longitude' => -7.5898,
        ]);

        Map::create([
            'first_name' => 'Sara',
            'last_name' => 'Benali',
            'latitude' => 34.0209,
            'longitude' => -6.8416,
        ]);

        Map::create([
            'first_name' => 'Youssef',
            'last_name' => 'Idrissi',
            'latitude' => 31.6295,
            'longitude' => -7.9811,
        ]);

        Map::create([
            'first_name' => 'Omar',
            'last_name' => 'Fassi',
            'latitude' => 35.7595,
            'longitude' => -5.8340,
        ]);

        Map::create([
            'first_name' => 'Khadija',
            'last_name' => 'Zahraoui',
            'latitude' => 32.2994,
            'longitude' => -9.2372,
        ]);

        Map::create([
            'first_name' => 'Hamza',
            'last_name' => 'Rifai',
            'latitude' => 30.4278,
            'longitude' => -9.5981,
        ]);

        Map::create([
            'first_name' => 'Imane',
            'last_name' => 'Cherkaoui',
            'latitude' => 34.0133,
            'longitude' => -5.0033,
        ]);

        Map::create([
            'first_name' => 'Mehdi',
            'last_name' => 'Bennani',
            'latitude' => 35.1728,
            'longitude' => -2.9283,
        ]);

        Map::create([
            'first_name' => 'Salma',
            'last_name' => 'Khalfi',
            'latitude' => 33.2605,
            'longitude' => -8.5060,
        ]);

        Map::create([
            'first_name' => 'Reda',
            'last_name' => 'Tazi',
            'latitude' => 31.7917,
            'longitude' => -7.0926,
        ]);
    }
}