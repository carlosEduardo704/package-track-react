import React, {useState} from "react";
import BuscaCepDataContext from "./buscaCepContext";

function DataProvider({children}) {
  const [data, setData] = useState(false);

  const updateData = (newData) => {
    setData(newData);
  };

  return(
    <BuscaCepDataContext.Provider value={{data, updateData}}>
      {children}
    </BuscaCepDataContext.Provider>
  )
}

export default DataProvider;