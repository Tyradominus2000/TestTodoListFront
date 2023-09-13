import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <i className="fas fa-bars mr10"></i>
      <div className="flex-fill">
        <img src={logo} alt="logo du blog" />
      </div>
      <ul>
        <button className={`mr10 btn btn-primary`}>
          <span>Register</span>
        </button>
        <button className={`mr10 btn btn-primary-reverse`}>
          <span>Login</span>
        </button>
      </ul>
    </header>
  );
}
