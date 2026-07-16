import { useState } from "react";
import Carrito from "./Carrito";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Navbar({
  usuario,
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

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Tienda React
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Link className="nav-link text-white" to="/">
              Productos
            </Link>

            {usuario && (
              <Link className="nav-link text-white" to="/agregar">
                Agregar Producto
              </Link>
            )}

            {usuario ? (
              <>
                <span className="text-white">{usuario.email}</span>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link className="btn btn-outline-light btn-sm" to="/login">
                Ingresar
              </Link>
            )}

            <button
              className="btn btn-outline-light position-relative"
              onClick={() => setMostrarCarrito(true)}
            >
              <i class="bi bi-cart4"></i>
              {cantidadTotal > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cantidadTotal}
                </span>
              )}
            </button>
          </div>
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
                className="btn-close"
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
