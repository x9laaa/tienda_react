import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function ProductoForm({ obtenerProductos }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [, forceUpdate] = useState();

  const validator = useRef(new SimpleReactValidator());

  const guardarProducto = async (e) => {
    e.preventDefault();

    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate({});
      return;
    }

    try {
      const nuevoProducto = {
        nombre,
        precio: Number(precio),
        imagen,
        fecha: new Date(),
      };

      await addDoc(collection(db, "productos"), nuevoProducto);

      await obtenerProductos();

      setNombre("");
      setPrecio("");
      setImagen("");

      alert("Producto guardado");
    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    }
  };

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="mb-3">Agregar Producto</h2>

      <form onSubmit={guardarProducto}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <div className="text-danger">
            {validator.current.message("nombre", nombre, "required|min:3")}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />

          <div className="text-danger">
            {validator.current.message(
              "precio",
              precio,
              "required|numeric|min:1",
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">URL de la imagen</label>

          <input
            type="text"
            className="form-control"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />

          <div className="text-danger">
            {validator.current.message("imagen", imagen, "required|url")}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Guardar Producto
        </button>
      </form>
    </div>
  );
}

export default ProductoForm;
