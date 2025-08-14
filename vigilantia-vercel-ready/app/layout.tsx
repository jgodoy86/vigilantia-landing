import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vigilantia — Verificación de seguridad y referencias de empleadas domésticas",
  description: "Consulta única por $19.900 COP. Verifica antecedentes, referencias y calificaciones con consentimiento digital y cumplimiento de Habeas Data.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Vigilantia — Verificación de seguridad y referencias",
    description: "Consulta única por $19.900 COP. Información colaborativa moderada y legal.",
    url: "https://vigilantia.example",
    siteName: "Vigilantia",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_CO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vigilantia — Verificación de seguridad y referencias",
    description: "Consulta única por $19.900 COP. Información colaborativa moderada y legal.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
        <div className="fixed inset-x-0 bottom-0 z-50 bg-white/90 p-3 shadow-soft ring-1 ring-gray-200 md:hidden">
          <div className="container-default flex items-center justify-between gap-3">
            <div className="text-sm">
              <span className="font-semibold">Consulta única</span>{" "}
              <span className="text-gray-600">por</span>{" "}
              <span className="font-semibold">$19.900 COP</span>
            </div>
            <a href="#pago" className="btn btn-primary">Hacer consulta</a>
          </div>
        </div>
      </body>
    </html>
  );
}
