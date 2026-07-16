function Carrito({ carrito }) {
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio),
    0
  );

  return (
    <div className="card shadow p-3">
      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div key={producto.id}>
              {producto.nombre} - ${producto.precio}
            </div>
          ))}

          <hr />

          <h4>Total: ${total}</h4>
        </>
      )}
    </div>
  );
}

export default Carrito;