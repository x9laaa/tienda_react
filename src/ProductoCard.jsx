function ProductoCard({ producto, agregarCarrito }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5>{producto.nombre}</h5>

        <p>
          <strong>Precio:</strong> ${producto.precio}
        </p>

        <button
          className="btn btn-success"
          onClick={() => agregarCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductoCard;
