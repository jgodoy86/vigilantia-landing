export default function Price() {
  return (
    <section id="pago" className="bg-white py-16 md:py-20">
      <div className="container-default">
        <h2 className="section-title">Pago por consulta</h2>
        <p className="section-subtitle">Sin suscripciones. Sin cobros ocultos.</p>
        <div className="mt-8 grid items-center gap-6 md:grid-cols-2">
          <div className="card">
            <div className="text-sm text-brand-700">Consulta única</div>
            <div className="mt-2 text-4xl font-bold">$19.900 <span className="text-base font-semibold">COP</span></div>
            <p className="mt-2 text-sm text-gray-600">Acceso inmediato al reporte completo, si existen registros.</p>
            <a href="#checkout" className="btn btn-primary mt-5 w-full" aria-label="Hacer consulta por 19.900 pesos colombianos">
              Hacer consulta ahora
            </a>
            <p className="mt-3 text-center text-xs text-gray-500">
              Métodos de pago: <span className="font-medium">PayU</span>, <span className="font-medium">MercadoPago</span>, <span className="font-medium">Stripe</span> (placeholder).
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">¿Qué recibes?</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Historial laboral y referencias verificadas</li>
              <li>• Calificaciones y comentarios moderados</li>
              <li>• Documentos y soportes autorizados</li>
              <li>• Registro de cambios y trazabilidad</li>
            </ul>
            <div id="checkout" className="mt-6 rounded-xl bg-brand-50 p-4 text-sm text-brand-700 ring-1 ring-brand-100">
              <strong>Integración de pago (Demo):</strong> aquí conectas tu gateway y, tras confirmar el pago, desbloqueas el reporte.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
