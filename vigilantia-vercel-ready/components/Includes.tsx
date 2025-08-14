export default function Includes() {
  const items = [
    "Verificación de identidad y documento (con foto)",
    "Historial laboral colaborativo con moderación",
    "Calificaciones y comentarios de empleadores verificados",
    "Reporte de seguridad (antecedentes públicos integrables)",
    "Trazabilidad y registro de cambios"
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-default">
        <h2 className="section-title">Qué incluye la consulta</h2>
        <p className="section-subtitle">Todo lo necesario para tomar decisiones informadas y seguras.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {items.map((it, i) => (
            <div key={i} className="card flex items-start gap-3">
              <div className="mt-0.5 h-2.5 w-2.5 flex-none rounded-full bg-brand-600" />
              <p className="text-sm text-gray-700">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
