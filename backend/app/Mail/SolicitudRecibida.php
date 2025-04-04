<?php

namespace App\Mail;

use App\Models\SolicitudTrabajo;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Storage;

class SolicitudRecibida extends Mailable
{
    use Queueable, SerializesModels;

    public $solicitud;

    public function __construct(SolicitudTrabajo $solicitud)
    {
        $this->solicitud = $solicitud;
    }

    public function build()
    {
        return $this->subject('Nueva solicitud de trabajo recibida')
                    ->view('emails.solicitud')
                    ->attach(storage_path('app/public/' . $this->solicitud->cv_url), [
                        'as' => 'Curriculum.pdf',
                        'mime' => 'application/pdf',
                    ]);
    }
}    
