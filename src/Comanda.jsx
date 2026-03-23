import styles from './Comanda.module.css';

function Comanda({ pedidos }) {
    const valorTotal = pedidos.reduce((acc, item) => {
        return acc + item.precoUnitario * item.quantidade;
    }, 0);

    const taxa = valorTotal * 0.1;
    const totalComTaxa = valorTotal + taxa;

    const formatarMoeda = (valor) =>
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);

    return (
        <div className={styles.recibo}>
            <div className={styles.cabecalho}>
                <h2>🧾 Resumo do Pedido</h2>
                <p>Mesa 04 - Atendente: João</p>
            </div>

            <ul className={styles.lista}>
                {pedidos.map((item) => {
                    const subtotal = item.precoUnitario * item.quantidade;

                    return (
                        <li key={item.id} className={styles.itemLista}>
                            <div className={styles.nomeQuantidade}>
                                <span>{item.quantidade}x</span>
                                <span>{item.nome}</span>
                            </div>
                            <span>{formatarMoeda(subtotal)}</span>
                        </li>
                    );
                })}
            </ul>

            <hr className={styles.linhaDivisoria} />

            <div className={styles.totalDiv}>
                <span>Taxa de 10%:</span>
                <span className={styles.valorTotal}>{formatarMoeda(taxa)}</span>

                <span>Total a Pagar:</span>
                <span className={styles.valorTotal}>{formatarMoeda(totalComTaxa)}</span>
            </div>
        </div>
    );
}

export default Comanda;
