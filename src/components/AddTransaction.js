import React, {useContext, useState} from 'react';
import { GlobalContext } from '../GlobalContext';
function AddTransation() {
    const [desc,setDesc] = useState('');
    const [montante,setMontante] = useState('');
    
    const {dispatch} = useContext(GlobalContext);
    function handleSubmit(e) {
        e.preventDefault();
        if(!desc||!montante){
            alert("Preencha todos os dados!");
            return;
        }
        let newItem = {id:Date.now(),descricao:desc,montante:parseFloat(montante)}
        dispatch({type:"ADD_TRANSACTION",payload:newItem})
        setDesc('');
        setMontante('');
    }
    return (
        <div className="app__add">
            <h4 className="title">Adiconar transação</h4>
            <form onSubmit={handleSubmit} action="">
                <div className="form-group">
                    <label htmlFor="">Descrição</label>
                    <input value={desc} onChange={(e)=>setDesc(e.currentTarget.value)} type="text" placeholder="Insira descrição..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Montante<br/>Negativo-Despesas e Positivo-Receita</label>
                    <input value={montante} onChange={(e)=>setMontante(e.currentTarget.value)} type="number" placeholder="Insira Montante..."/>
                </div>
                <button>Adicionar Transação</button>
            </form>
            
        </div>
    )
}

export default AddTransation;
