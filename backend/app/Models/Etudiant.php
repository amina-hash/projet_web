<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    protected $table = 'etudiants';

    protected $fillable = [
        'login',
        'pass',
        'nom',
        'note1',
        'note2',
        'moyenne',
        'longitude',
        'latitude'
    ];
}