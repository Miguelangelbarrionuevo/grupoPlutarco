<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'correo',
        'telefono',
        'fecha',
        'hora',
        'comensales',
        'mesa',
        'id_restaurante',
        'mensaje_opcional',
    ];
    
    public function restaurante()
{
    return $this->belongsTo(Restaurante::class, 'id_restaurante');
}

}
