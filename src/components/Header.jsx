import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">CreditSmar</h1>
      <nav className="flex space-x-6 text-lg">
        <Link to="/" className="hover:opacity-80 flex items-center gap-1">
          <span>🏠</span> <span>Inicio</span>
        </Link>
        <Link to="/simulador" className="hover:opacity-80 flex items-center gap-1">
          <span>🧮</span> <span>Simulador</span>
        </Link>
        <Link to="/solicitud" className="hover:opacity-80 flex items-center gap-1">
          <span>📄</span> <span>Solicitud</span>
        </Link>
      </nav>
    </header>
  );
}