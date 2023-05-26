import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.svg";
import dashboard from "../../../assets/dashboard.svg";
import unidadeConsumidora from "../../../assets/unidade-consumidora.svg";
import cadastroEnergiaGerada from "../../../assets/cadastro-energia-gerada.svg";

export default function Navbaar() {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <img src={logo} alt="Solar Energy logo" onClick={() => navigate("/")} />

      <div>
        <button onClick={() => navigate("/")}>
          <span>Home</span>
        </button>
        <button onClick={() => navigate("/contato")}>
          <span>Contato</span>
        </button>
        <button onClick={() => navigate("/login")}>
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
}
