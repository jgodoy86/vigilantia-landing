export default function Trust() {
  return (
    <section id="legal" className="py-16 md:py-20">
      <div className="container-default">
        <h2 className="section-title">Confianza y legalidad</h2>
        <p className="section-subtitle">Cumplimos con la normativa de protección de datos aplicable en Colombia.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="badge mb-2">Consentimiento digital obligatorio</div>
            <p className="text-sm text-gray-700">La persona titular firma o acepta digitalmente el tratamiento para verificación de referencias y seguridad.</p>
          </div>
          <div className="card">
            <div className="badge mb-2">Derechos ARCO</div>
            <p className="text-sm text-gray-700">Acceso, rectificación y supresión disponibles a solicitud de la titular de los datos.</p>
          </div>
          <div className="card">
            <div className="badge mb-2">Seguridad y trazabilidad</div>
            <p className="text-sm text-gray-700">Almacenamiento cifrado, acceso controlado y auditoría de consultas y cambios.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
