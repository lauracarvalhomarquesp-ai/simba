export function Footer() {
  return (
    <footer className="bg-safari-dark text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Simba Safari. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Imagens meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
}
