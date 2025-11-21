import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataBaseContext } from "../Context/DataBaseContext.jsx";
import styles from "../Styles/CountryInfo.module.css";
function Country_Detalles(params) {
  const { DataBase, SetDataBase } = useContext(DataBaseContext);
  const { ResetData, SetReset } = useContext(DataBaseContext);
  const [Others, SetOthers] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    const Filter = ResetData.filter((info) => info.name === name);

    SetDataBase(Filter);

    const buscar = Filter.flatMap((e) => e.borders ?? []);

    const info = ResetData.filter((e) => buscar.includes(e.alpha3Code));
    SetOthers(info);
    console.log(info);
  }, [name]);

  return (
    <article className={styles.Article_Country_Info_Container}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
        onClick={() => navigate(-1)}
        className={styles.Button_Back}
      >
        <i className="fa-solid fa-arrow-left-long"></i> Back
      </motion.button>

      {DataBase && DataBase.length > 0 ? (
        <>
          {DataBase.flatMap((item, index) => (
            <div key={index} className={styles.Div_Country_Details}>
              <img src={item.flags.svg} alt="" />
              <div className={styles.Div_Country_Details_Info}>
                <h3>{item.name}</h3>

                <div className={styles.Div_Country_Details_Info_Text}>
                  <p>
                    Population: <span>{item.population.toLocaleString()}</span>
                  </p>
                  <p>
                    Region: <span>{item.region}</span>
                  </p>
                  <p>
                    Capital: <span>{item.capital}</span>
                  </p>
                  <p>
                    Sub Region: <span>{item.subregion}</span>
                  </p>
                  <p>
                    Native Name: <span>{item.nativeName}</span>
                  </p>

                  <p>
                    Top Level Domain: <span>{item.topLevelDomain}</span>
                  </p>
                  {Array.isArray(item.currencies) && (
                    <p>
                      Currencies:
                      {item.currencies.map((c, i) => (
                        <span key={i}> {c.code} </span>
                      ))}
                    </p>
                  )}
                  {Array.isArray(item.languages) && (
                    <p>
                      Languages:{" "}
                      <span>
                        {item.languages.map((c) => c.name).join(", ")}
                      </span>
                    </p>
                  )}
                </div>

                <div className={styles.Div_Country_Details_Info_Borders}>
                  {Others && Others.length > 0 ? (
                    <>
                      <p>Border Countries:</p>
                      {Others.flatMap((data, index) => (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            ease: "easeOut",
                          }}
                          key={index}
                          onClick={() => navigate(`/country/${data.name}`)}
                        >
                          {data.name}
                        </motion.button>
                      ))}
                    </>
                  ) : (
                    <p>
                      Border Countries: <span>None</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>No hay Datos</>
      )}
    </article>
  );
}

export default Country_Detalles;
