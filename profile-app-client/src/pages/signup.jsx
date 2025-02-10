import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Crear Cuenta</h2>
        <form>
          <input type="text" placeholder="Nombre de usuario" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Registrarse</button>
        </form>
        <Link to="/login" className="auth-link">¿Ya tienes cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
}

export default SignupPage;
