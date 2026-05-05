<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Map;

class MapController extends Controller
{
    public function index()
    {
        return response()->json(Map::all());
    }
}