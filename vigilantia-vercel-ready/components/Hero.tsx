export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-default grid gap-8 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <div className="badge mb-4">
            <span>Consentimiento digital firmado</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span>Cumplimos Habeas Data</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Verifica el background de seguridad y referencias de empleadas domésticas en minutos.
          </h1>
          <p className="mt-4 max-w-xl text-gray-600">
            Consulta única por <strong>$19.900 COP</strong>. Información colaborativa moderada, legal y con trazabilidad.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#pago" className="btn btn-primary">Hacer consulta por $19.900</a>
            <a href="#como-funciona" className="btn btn-secondary">Cómo funciona</a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-gray-700">
            <li>• Resultados rápidos si ya existen registros</li>
            <li>• Historial laboral y calificaciones con empleadores verificados</li>
            <li>• Moderación anti-difamación y registro de cambios</li>
          </ul>
        </div>
        <div className="relative h-64 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-300 md:h-[420px]">
          <div className="absolute inset-6 rounded-xl bg-white/50 ring-1 ring-white/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,107,255,0.25),transparent_50%)]" />
        </div>
      </div>
    </section>
  );
}
