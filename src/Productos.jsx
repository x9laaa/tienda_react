import ProductoCard from "./ProductoCard";

function Productos({ productos, agregarCarrito }) {
  return (
    <>
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
    </>
  );
}

export default Productos;
