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
        // Validar los datos
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'correo' => 'required|email',
            'cv' => 'required|mimes:pdf|max:2048'
        ]);

        // Guardar el archivo PDF
        $cvPath = $request->file('cv')->store('cvs', 'public');

        // Crear la solicitud en la base de datos
        $solicitud = SolicitudTrabajo::create([
            'nombre' => $validated['nombre'],
            'apellidos' => $validated['apellidos'],
            'correo' => $validated['correo'],
            'cv_url' => $cvPath
        ]);

        // Enviar correo con el PDF adjunto
        Mail::to('miguelbarrionuevo2011@gmail.com')->send(new SolicitudRecibida($solicitud));

        return response()->json([
            'message' => 'Solicitud enviada y almacenada correctamente',
            'solicitud' => $solicitud
        ], 201);
    }
}
