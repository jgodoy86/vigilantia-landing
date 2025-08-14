export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-default">
        <div className="grid items-center gap-6 rounded-2xl bg-brand-600 p-8 text-white shadow-soft ring-1 ring-brand-700 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Haz tu consulta ahora</h2>
            <p className="mt-2 text-brand-100">Consulta única por <strong>$19.900 COP</strong>. Sin planes ni suscripciones.</p>
          </div>
          <div className="flex justify-end">
            <a href="#pago" className="btn bg-white text-brand-700 hover:bg-brand-50">Pagar $19.900 y ver reporte</a>
          </div>
        </div>
      </div>
    </section>
  );
}
