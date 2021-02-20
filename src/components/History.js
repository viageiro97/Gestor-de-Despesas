import React, {useContext} from 'react';
import { GlobalContext } from "../GlobalContext"

function History() {
    const {state,dispatch} = useContext(GlobalContext);
    return (
        <div className="app__history">
            <h4 className="title">Historico</h4>
            <ul className="transactions">
                {
                    state.map((element)=>{
                        return(
                            <li key={element.id} className={element.montante<0?"expense-item":"income-item"}>{element.descricao}<span>{element.montante} MT</span><button onClick={()=>dispatch({type:"DELETE_TRANSACTION",payload:element.id})} className="delete-btn">X</button></li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default History
