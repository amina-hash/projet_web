<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    protected $fillable = [
        'nom',
        'prenom',
        'cne',
        'note1',
        'note2',
        'note3',
        'moyenne'
    ];
}