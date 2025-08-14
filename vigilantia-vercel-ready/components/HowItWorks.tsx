export default function HowItWorks() {
  const steps = [
    { title: "Ingresa datos básicos", desc: "Nombre y número de documento de la empleada." },
    { title: "Consentimiento digital", desc: "La empleada firma en pantalla el uso de datos." },
    { title: "Generamos el reporte", desc: "Con datos colaborativos moderados y fuentes públicas." },
    { title: "Pago por consulta", desc: "Paga $19.900 COP y accede al reporte completo." }
  ];
  return (
    <section id="como-funciona" className="bg-white py-16 md:py-20">
      <div className="container-default">
        <h2 className="section-title">Cómo funciona</h2>
        <p className="section-subtitle">Modelo <strong>pay-per-use</strong>: sin suscripciones. Pagas solo cuando necesitas consultar.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={idx} className="card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 font-semibold text-brand-700">
                {idx + 1}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
