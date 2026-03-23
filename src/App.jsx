import './App.css'
import Comanda from './components/Comanda.jsx';
import styles from './App.module.css';


function App() {
    const itensPedidos = [
        { id: 1, nome: 'Hambúrguer Clássico', precoUnitario: 25.5, quantidade: 2 },
        { id: 2, nome: 'Batata Frita (Média)', precoUnitario: 12.0, quantidade: 1 },
        { id: 3, nome: 'Refrigerante em Lata', precoUnitario: 6.0, quantidade: 2 },
        { id: 4, nome: 'Pudim de Leite', precoUnitario: 8.5, quantidade: 1 },
    ];

  return (
      <div className={styles.container}>
          <h1 className={styles.tituloPrincipal}>Lanchonete React 🍔</h1>
          <Comanda pedidos={itensPedidos} />
      </div>
  );
}

export default App
