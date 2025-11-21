import { createContext, useState } from "react";
import Data from "../../BackendData/data.json";

export const DataBaseContext = createContext();

export function DataBaseProvider({ children }) {
  const [DataBase, SetDataBase] = useState(Data);
  const [ResetData, SetReset] = useState(Data);


/*
Get data from API
useEffect(() => {
   
     const GetData=async()=>{
       try {
       const response=await fetch("https://rest-countries-api-data.herokuapp.com/data/v1")
       const data=await response.json()
       SetDataBase(data)
       SetReset(data)
     }
     catch (error) {
    console.log(error);
    
   }
     
   GetData();
   }  
  }, []);
  */
  return (
    <>
      <DataBaseContext.Provider
        value={{ DataBase, SetDataBase, ResetData, SetReset }}
      >
        {children}
      </DataBaseContext.Provider>
    </>
  );
}
