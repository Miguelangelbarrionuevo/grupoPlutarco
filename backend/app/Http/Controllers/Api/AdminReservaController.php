<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reserva;

class AdminReservaController extends Controller
{
    public function index(Request $request)
    {
        $query = Reserva::with('restaurante')->orderBy('fecha');

        if ($request->has('futuras') && $request->futuras == '1') {
            $query->where('fecha', '>=', now()->toDateString());
        }

        if ($request->has('restaurante')) {
            $query->where('id_restaurante', $request->restaurante);
        }

        return response()->json($query->get());
    }

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
