import {useContext} from 'react';
import { GlobalContext } from "../GlobalContext"

function Header() {
    const {state} = useContext(GlobalContext);
    const valores = state.map((element)=>element.montante);
    let despesas = valores.filter((element)=>element<0);
    let receitas = valores.filter((element)=>element>0);

    despesas = despesas.length?despesas.reduce((acc,item)=>acc+item):0;
    receitas = receitas.length?receitas.reduce((acc,item)=>acc+item):0;
    let saldo = despesas+receitas;
    return (
        <div className="app__header">
            <div className="balance">
                <h4>O Seu saldo</h4>
                <h1>{saldo} MT</h1>
            </div>
            <div className="balance-container">
                <div className="income">
                    <h4>Receitas</h4>
                    <p>{receitas} MT</p>
                </div>
                <div className="expense">
                    <h4>Despesas</h4>
                    <p>{Math.abs(despesas)} MT</p>
                </div>
            </div>
        </div>
    )
}

export default Header
