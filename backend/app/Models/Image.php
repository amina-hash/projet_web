<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';

    protected $fillable = [
        'name',
        'type',
        'size',
        'bin_img'
    ];

    // optional (مفيد فالتعامل مع data كبيرة)
    protected $casts = [
        'size' => 'integer',
    ];

    // نخبيو binary فـ JSON responses (اختياري)
    protected $hidden = [
        'bin_img'
    ];
}