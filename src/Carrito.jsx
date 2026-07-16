function Carrito({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio),
    0,
  );

  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">Carrito ({carrito.length})</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div
              key={producto.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <div>
                <strong>{producto.nombre}</strong>
                <br />${producto.precio}
              </div>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="mt-3">
            <h4>Total: ${total}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
