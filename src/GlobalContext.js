import React,{ createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

//Carregar dados do Local Storage
function getLocalStorage(){
    const data = localStorage.getItem("transactions")?JSON.parse(localStorage.getItem("transactions")):[];
    return data;
}

console.log("First Render!")
const GlobalContext = createContext();


function GlobalContextProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer,getLocalStorage());
    
    useEffect(()=>{
        localStorage.setItem('transactions',JSON.stringify(state));
    },[state])
    return (
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}


export {GlobalContext, GlobalContextProvider}