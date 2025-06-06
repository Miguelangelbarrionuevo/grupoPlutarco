<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurante extends Model
{
    use HasFactory;
    
    public function reservas()
    {
        return $this->hasMany(Reserva::class, 'id_restaurante');
    }
}
