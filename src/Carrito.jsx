function Carrito({
  carrito,
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad,
}) {
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio) * producto.cantidad,
    0,
  );
  const cantidadTotal = carrito.reduce(
  (suma, producto) => suma + producto.cantidad,
  0
);

  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">Carrito ({cantidadTotal})</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div
              key={producto.id}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              <div>
                <strong>{producto.nombre}</strong>
                <br />
                Precio: ${producto.precio}
                <br />
                Subtotal: ${producto.precio * producto.cantidad}
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => disminuirCantidad(producto.id)}
                >
                  -
                </button>

                <span className="mx-3 fw-bold">{producto.cantidad}</span>

                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => aumentarCantidad(producto.id)}
                >
                  +
                </button>

                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="mt-3">Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default Carrito;
