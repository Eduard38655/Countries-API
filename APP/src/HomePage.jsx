import Contenido from "../src/Componentes/Contenido.jsx";
import Header from "../src/Componentes/header.jsx";
import Styles from "../src/Styles/Home.module.css";

function HomePage(params) {
  return (
    <article className={Styles.Article_Home_Container}>
      <Header />
      <Contenido />
    </article>
  );
}

export default HomePage;
