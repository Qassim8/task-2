import { Link } from "react-router-dom";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={`container ${style.nav}`}>
        <Link to="">
          <h2 className={style.logo}>Logo</h2>
        </Link>
        <ul className={style["nav-items-list"]}>
          <li className={style["nav-item"]}>
            <Link to="">Home</Link>
          </li>
          <li className={style["nav-item"]}>
            <Link to="">About</Link>
          </li>
          <li className={style["nav-item"]}>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
