<h2>📩 Nueva reserva recibida</h2>

<p><strong>Nombre:</strong> {{ $reserva->nombre }}</p>
<p><strong>Correo:</strong> {{ $reserva->correo }}</p>
<p><strong>Teléfono:</strong> {{ $reserva->telefono }}</p>
<p><strong>Restaurante:</strong> {{ $reserva->restaurante->nombre ?? 'Desconocido' }}</p>
<p><strong>Fecha:</strong> {{ $reserva->fecha }}</p>
<p><strong>Hora:</strong> {{ $reserva->hora }}</p>
<p><strong>Comensales:</strong> {{ $reserva->comensales }}</p>

@if($reserva->mensaje_opcional)
    <p><strong>Mensaje adicional:</strong> {{ $reserva->mensaje_opcional }}</p>
@endif
