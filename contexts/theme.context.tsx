import { createContext, useCallback, useReducer, useEffect } from "react";


export const themeContext = createContext<ContextType>({} as ContextType);


type ContextType = {
  
};


export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <themeContext.Provider value={{}}>{children}</themeContext.Provider>
    );
}
