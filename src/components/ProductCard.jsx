import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg text-center border">
      <img
        src={producto.img}
        alt={producto.nombre}
        className="w-24 mx-auto mb-3"
      />
      <h3 className="text-lg font-bold mb-2">{producto.nombre}</h3>
      <p className="text-sm">Tasa de interés: {producto.tasa}</p>
      <p className="text-sm">Monto: {producto.monto}</p>
      <p className="text-sm mb-3">Plazo máximo: {producto.plazo}</p>
      <Link
        to="/simulador"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
      >
        Simular Crédito
      </Link>
    </div>
  );
}
