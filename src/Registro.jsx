import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Usuario registrado");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="card p-4 shadow">
      <h2>Registro</h2>

      <form onSubmit={registrar}>
        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-success">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
