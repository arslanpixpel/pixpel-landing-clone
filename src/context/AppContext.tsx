import React, { createContext, useState, useContext } from 'react';
import About from '../pages/landing/about/about';
// new
interface IAppContext {
  clickedContact: boolean;
  setClickedContact?: any;
  faqStatus: boolean[];
  setFaqStatus?: any;
  midData?: any;
  contentData?: any;
  filteredData?:any;
  setFilteredData?:any;
}

const defaultState = {
  clickedContact: false,
  faqStatus: [false, false, false, false],
};

export const AppContext = createContext<IAppContext>(defaultState);

const AppContextProvider = ( props: any ) => {
    const [filteredData , setFilteredData] = useState({});
    const [clickedContact, setClickedContact] = useState(defaultState.clickedContact);
  const [faqStatus, setFaqStatus] = useState(defaultState.faqStatus);
  const [midData, , toggleBg, handleToggle] = About();

  
  return (
    <AppContext.Provider 
      value={{ 
        midData,
        clickedContact,
        setClickedContact,
        faqStatus,
        setFaqStatus,filteredData , setFilteredData
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);