<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\SolicitudTrabajo;
use App\Mail\SolicitudRecibida;
use Illuminate\Support\Facades\Storage;

class SolicitudTrabajoController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'correo' => 'required|email',
            'cv' => 'required|mimes:pdf|max:2048'
        ]);

        $cvPath = $request->file('cv')->store('cvs', 'public');

        $solicitud = SolicitudTrabajo::create([
            'nombre' => $validated['nombre'],
            'apellidos' => $validated['apellidos'],
            'correo' => $validated['correo'],
            'cv_url' => $cvPath
        ]);

        Mail::to('miguelbarrionuevo2011@gmail.com')->send(new SolicitudRecibida($solicitud));

        return response()->json([
            'message' => 'Solicitud enviada y almacenada correctamente',
            'solicitud' => $solicitud
        ], 201);
    }
}
