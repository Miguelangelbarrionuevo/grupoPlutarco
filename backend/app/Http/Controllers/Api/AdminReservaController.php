<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reserva;

class AdminReservaController extends Controller
{
    // Mostrar todas las reservas
    public function index()
    {
        $reservas = Reserva::with('restaurante')->orderBy('fecha')->get();

        return response()->json($reservas);
    }

    // Cancelar una reserva
    public function destroy($id)
    {
        $reserva = Reserva::find($id);

        if (!$reserva) {
            return response()->json(['message' => 'Reserva no encontrada'], 404);
        }

        $reserva->delete();

        return response()->json(['message' => 'Reserva cancelada correctamente']);
    }
}
