"use client";
import { useState } from "react";

const items = [
  { q: "¿La empleada debe autorizar?", a: "Sí. El consentimiento digital firmado es obligatorio antes de mostrar datos personales o documentos." },
  { q: "¿Qué recibo por $19.900 COP?", a: "Acceso al reporte completo: historial laboral, referencias y calificaciones moderadas, y soportes autorizados." },
  { q: "¿Cuánto tarda el reporte?", a: "Si existen registros previos, podrás verlo en minutos. La base se actualiza de forma continua." },
  { q: "¿Cómo protegen los datos?", a: "Cifrado, acceso controlado y auditoría de consultas. Derechos de acceso, rectificación y supresión para la titular de los datos." },
  { q: "¿Quién puede calificar?", a: "Empleadores verificados. Todas las calificaciones y comentarios pasan por moderación antes de publicarse." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="container-default">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="card">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-medium">{item.q}</span>
                <span className="ml-3 text-xl">{open === idx ? "–" : "+"}</span>
              </button>
              {open === idx && (
                <div id={`faq-panel-${idx}`} className="mt-3 text-sm text-gray-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": items.map((i) => ({
                "@type": "Question",
                "name": i.q,
                "acceptedAnswer": { "@type": "Answer", "text": i.a }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
