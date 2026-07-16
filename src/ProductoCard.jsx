function ProductoCard({ producto, agregarCarrito }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
        style={{
          height: "200px",
          objectFit: "cover"
        }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {producto.nombre}
        </h5>

        <p className="card-text">
          Precio: ${producto.precio}
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