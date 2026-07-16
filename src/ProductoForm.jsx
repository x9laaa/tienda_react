import { useState } from "react";

function ProductoForm({ agregarProducto }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const guardarProducto = (e) => {
    e.preventDefault();

    if (!nombre || !precio || !imagen) {
      alert("Complete todos los campos");
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      precio,
      imagen,
    };

    agregarProducto(nuevoProducto);
    setNombre("");
    setPrecio("");
    setImagen("");
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
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL de la imagen</label>

          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Guardar Producto
        </button>
      </form>
    </div>
  );
}

export default ProductoForm;
