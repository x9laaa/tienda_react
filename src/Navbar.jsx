import { useState } from "react";
import Carrito from "./Carrito";
import { Link } from "react-router-dom";

function Navbar({
  carrito,
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad,
}) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const cantidadTotal = carrito.reduce(
    (suma, producto) => suma + producto.cantidad,
    0,
  );

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              Tienda React 
            </Link>

            <div className="d-flex gap-3 ms-4">
              <Link className="nav-link text-white" to="/">
                Productos
              </Link>

              <Link className="nav-link text-white" to="/agregar">
                Agregar Producto
              </Link>
            </div>
          </div>

          <button
            className="btn btn-outline-light position-relative"
            onClick={() => setMostrarCarrito(true)}
          >
            🛒
            {cantidadTotal > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cantidadTotal}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mostrarCarrito && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              background: "rgba(0,0,0,0.4)",
              zIndex: 1040,
            }}
            onClick={() => setMostrarCarrito(false)}
          />

          <div
            className="position-fixed top-0 end-0 bg-white shadow"
            style={{
              width: "400px",
              height: "100vh",
              zIndex: 1050,
              overflowY: "auto",
              padding: "20px",
            }}
          >
            <div className="d-flex justify-content-between mb-3">
              <button
                className="btn-close ms-auto"
                onClick={() => setMostrarCarrito(false)}
              />
            </div>

            <Carrito
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
