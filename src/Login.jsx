import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);

    
    navigate("/home");
  };

  return (
    <main id='login'>
      <section className="login-container">
        <div id="imagem"></div>
        <div id="campo">
          <h2>Login Intranet</h2>
          <br />
          <p>Faça seu login para acessar</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="material-symbols-outlined">person</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <span className="material-symbols-outlined">vpn_key</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength="16"
                minLength="8"
                required
              />
            </div>
            <br />

            <button type="submit" className="btn-login">Entrar</button>

            <div id="esqueceu">
              <a href="#">
                Esqueceu sua senha?
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
