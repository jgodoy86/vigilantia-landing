export default function Testimonials() {
  const items = [
    { name: "Laura G.", city: "Bogotá", text: "El proceso fue claro y el reporte muy completo. Me dio tranquilidad." },
    { name: "Carlos M.", city: "Medellín", text: "Pagué una sola vez y tuve toda la información que necesitaba." },
    { name: "Andrea P.", city: "Cali", text: "Me gustó que pidan consentimiento y moderen las referencias." }
  ];
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-default">
        <h2 className="section-title">Testimonios</h2>
        <p className="section-subtitle">Experiencias reales con foco en confianza.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="card">
              <p className="text-sm text-gray-700">“{t.text}”</p>
              <div className="mt-4 text-sm font-medium">{t.name}</div>
              <div className="text-xs text-gray-500">{t.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
