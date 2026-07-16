import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          <form onSubmit={iniciarSesion}>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>

              <div className="input-group">
                <input
                  type={mostrarPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                >
                  <i
                    className={`bi ${
                      mostrarPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                  />
                </span>
              </div>
            </div>

            <button className="btn btn-primary w-100">Ingresar</button>
          </form>

          <hr />

          <div className="text-center">
            <p className="mb-1">¿No tienes cuenta?</p>

            <Link to="/registro">Crear cuenta</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
