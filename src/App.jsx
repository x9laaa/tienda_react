import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "./Navbar";
import Productos from "./Productos";
import AgregarProducto from "./AgregarProducto";
import Login from "./Login";
import Registro from "./Registro";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "productos"));

      const listaProductos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProductos(listaProductos);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item,
        ),
      );
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1,
        },
      ]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: producto.cantidad + 1,
            }
          : producto,
      ),
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito
        .map((producto) =>
          producto.id === id
            ? {
                ...producto,
                cantidad: producto.cantidad - 1,
              }
            : producto,
        )
        .filter((producto) => producto.cantidad > 0),
    );
  };

  return (
    <BrowserRouter>
      <Navbar
        usuario={usuario}
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Routes>
              <Route
                path="/"
                element={
                  <Productos
                    productos={productos}
                    agregarCarrito={agregarCarrito}
                  />
                }
              />

              <Route
                path="/agregar"
                element={
                  <ProtectedRoute usuario={usuario}>
                    <AgregarProducto obtenerProductos={obtenerProductos} />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />

              <Route path="/registro" element={<Registro />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
