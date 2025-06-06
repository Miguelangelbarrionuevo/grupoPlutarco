<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolicitudTrabajo extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'apellidos',
        'correo',
        'cv_url',
    ];
    
}
