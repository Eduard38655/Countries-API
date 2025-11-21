import { useContext } from "react";
import { ThemeContext } from "../Context/DataContext.jsx"; // si ThemeContext es named export
import Styles from "../Styles/Home.module.css";

function Header(params) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header className={Styles.Header}>
        <div>
          <h1>Where in the world?</h1>

          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <i className="fa-solid fa-moon"></i> Dark Mode
              </>
            ) : (
              <>
                <i className="fa-solid fa-sun"></i> Light Mode
              </>
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
