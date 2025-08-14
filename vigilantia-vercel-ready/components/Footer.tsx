export default function Footer() {
  return (
    <footer id="contacto" className="border-t bg-white py-10">
      <div className="container-default grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-600" />
            <span className="text-base font-semibold">Vigilantia</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Verificación de seguridad y referencias de empleadas domésticas. Pago por consulta.</p>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos de Uso</a></li>
            <li><a href="#" className="hover:underline">Política de Tratamiento de Datos</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contacto</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>soporte@vigilantia.co</li>
            <li>+57 300 000 0000</li>
          </ul>
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Vigilantia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
