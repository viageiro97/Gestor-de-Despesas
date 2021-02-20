import './App.css';
import Balance from './components/Balance';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Gestor de Despesas</h1>
      <Balance/>
      <History/>
      <AddTransaction/>
    </div>
  );
}

export default App;
