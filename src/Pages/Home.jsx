import { productos } from "../components/Cards";

const Home = () => {
return (
<section className="p-8">
<h2 className="text-2xl font-semibold mb-6 text-center">Catálogo de Créditos</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{productos.map((producto) => (
<div
key={producto.nombre}
className="bg-white shadow-lg p-4 rounded-lg text-center border"
>
<img
src={producto.img}
alt={producto.nombre}
className="w-24 mx-auto mb-3"
/>
<h3 className="text-lg font-bold mb-2">{producto.nombre}</h3>
<p className="text-sm">Tasa de interés: {producto.tasa}</p>
<p className="text-sm">Monto: {producto.monto}</p>
<p className="text-sm mb-3">Plazo máximo: {producto.plazo}</p>
<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
Ver detalles
</button>
</div>
))}
</div>
</section>
  )
}
export default Home;