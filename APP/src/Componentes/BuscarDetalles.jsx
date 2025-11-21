import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { DataBaseContext } from "../Context/DataBaseContext.jsx";
import Styles from "../Styles/Home.module.css";

function BuscarDetalles() {
  const { SetDataBase, ResetData } = useContext(DataBaseContext);

  const [Search, SetSearch] = useState("");
  const [Category, SetCategory] = useState([]);
  const [Region, SetRegion] = useState("");
  const [Active, SetActive] = useState(false);

  // Extraer regiones únicas
  useEffect(() => {
    const regionesUnicas = [...new Set(ResetData.map((item) => item.region))];
    SetCategory(regionesUnicas);
  }, [ResetData]);

  // Filtrar por nombre o región
  useEffect(() => {
    const base = ResetData ?? [];
    const q = Search.toLowerCase();
    const regionQ = Region;

    if (!q && !regionQ) {
      SetDataBase(base);
      return;
    }

    const Buscar = base.filter((e) => {
      const nameMatch = q ? e.name.toLowerCase().startsWith(q) : false;
      const regionMatch = regionQ ? (e.region ?? "") === regionQ : false;
      return nameMatch || regionMatch;
    });

    SetDataBase(Buscar);
  }, [Search, Region, ResetData, SetDataBase]);

  return (
    <div className={Styles.Container_Buscar}>
      <motion.div
        className={Styles.Div_Buscar}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => SetSearch(e.target.value)}
        />
      </motion.div>

      <div className={Styles.Div_Select}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
          onClick={() => SetActive(!Active)}
          className={Styles.Button_Select}
          role="button"
          tabIndex={0}
        >
          {Region ? <span>{Region} </span> : <>Filter by Region </>}

          {Active ? (
            <motion.i
              initial={{ rotate: 0 }}
              animate={{ rotate: -180, ease: "easeInOut" }}
              transition={{ duration: 0.8 }}
              className="fa-solid fa-angle-up"
            ></motion.i>
          ) : (
            <motion.i
              initial={{ rotate: 0 }}
              animate={{ rotate: 180, ease: "easeInOut" }}
              transition={{ duration: 0.8 }}
              className="fa-solid fa-angle-down"
            ></motion.i>
          )}
        </motion.div>

        {Active && (
          <div className={Styles.Div_Ul}>
            <ul>
              {Category.length > 0 &&
                Category.map((region, index) => (
                  <li
                    role="button"
                    tabIndex={0}
                    key={index}
                    onClick={() => {
                      SetRegion(region);
                      SetActive(false);
                    }}
                    onKeyDown={(ev) => {
                      if (ev.key === "Enter") {
                        SetRegion(region);
                        SetActive(false);
                      }
                    }}
                  >
                    {region}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuscarDetalles;
