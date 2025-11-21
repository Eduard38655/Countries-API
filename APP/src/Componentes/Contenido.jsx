import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchData from "../Componentes/BuscarDetalles.jsx";
import { DataBaseContext } from "../Context/DataBaseContext.jsx";
import styles from "../Styles/Home.module.css";

function Contenido(params) {
  const { DataBase, SetDataBase } = useContext(DataBaseContext);
  const { ResetData, SetReset } = useContext(DataBaseContext);
  const navigate = useNavigate();

  return (
    <main className={styles.Main_Content_Container}>
      <SearchData />

      <div className={styles.Sub_Content_Container}>
        {DataBase && DataBase.length > 0 ? (
          <div className={styles.Container_Carts}>
            {DataBase.flatMap((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
                className={styles.Cart_Item}
                key={index}
                onClick={() => navigate(`/country/${item.name}`)}
              >
                <img src={item.flags.png} alt="" />
                <div className={styles.Div_Cart_Info}>
                  <h3>{item.name}</h3>

                  <div>
                    <p>
                      Population: <span>{item.population}</span>
                    </p>
                    <p>
                      Region: <span>{item.region}</span>
                    </p>
                    <p>
                      Capital: <span>{item.capital}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <h3>No hay Datos</h3>
        )}
      </div>
    </main>
  );
}

export default Contenido;
