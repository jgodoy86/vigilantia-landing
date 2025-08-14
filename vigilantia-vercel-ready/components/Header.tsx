export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-default flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-brand-600"></div>
          <span className="text-lg font-semibold">Vigilantia</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#como-funciona" className="text-gray-700 hover:text-gray-900">Cómo funciona</a>
          <a href="#legal" className="text-gray-700 hover:text-gray-900">Legal</a>
          <a href="#faq" className="text-gray-700 hover:text-gray-900">Preguntas</a>
          <a href="#contacto" className="text-gray-700 hover:text-gray-900">Contacto</a>
          <a href="#pago" className="btn btn-primary">Hacer consulta por $19.900</a>
        </nav>
      </div>
    </header>
  );
}
