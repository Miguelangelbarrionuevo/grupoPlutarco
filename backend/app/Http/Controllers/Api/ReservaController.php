<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reserva;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReservaRealizada;

class ReservaController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'correo' => 'required|email',
            'telefono' => 'required|string|max:20',
            'fecha' => 'required|date',
            'hora' => 'required',
            'comensales' => 'required|integer|min:1',
            'id_restaurante' => 'required|integer',
            'mesa' => 'nullable|string|max:100',
            'mensaje_opcional' => 'nullable|string',
        ]);

        $reserva = Reserva::create($validated);

        // Cargar la relación restaurante para incluirla en el correo
        $reserva->load('restaurante');

        // Enviar correo al dueño con los datos de la reserva
        Mail::to('miguelbarrionuevo2011@gmail.com')->send(new ReservaRealizada($reserva));

        return response()->json(['message' => 'Reserva guardada y correo enviado correctamente', 'reserva' => $reserva], 201);
    }
}
