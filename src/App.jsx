import { useState } from "react";

import ProductoForm from "./ProductoForm";
import ProductoCard from "./ProductoCard";
import Carrito from "./Carrito";

function App() {
  const [productos, setProductos] = useState([]);

  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Tienda React</h1>

      <ProductoForm agregarProducto={agregarProducto} />

      <h2 className="mb-3">Productos</h2>

      <div className="row">
        {productos.length === 0 ? (
          <p>No hay productos registrados</p>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="col-md-4 mb-3">
              <ProductoCard
                producto={producto}
                agregarCarrito={agregarCarrito}
              />
            </div>
          ))
        )}
      </div>

      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
}

export default App;
