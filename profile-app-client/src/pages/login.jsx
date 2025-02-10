import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="text" placeholder="Nombre de usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <Link to="/signup" className="auth-link">¿No tienes cuenta? Regístrate</Link>
      </div>
    </div>
  );
}

export default LoginPage;
