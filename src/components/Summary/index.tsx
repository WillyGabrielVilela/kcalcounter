
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { useTransactions } from '../../hooks/useTransactions';






import { Container } from "./styles";


export function Summary () {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            
            <div>
                <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="Entradas" /> 
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR').format(summary.deposits)} kcals
                </strong>
            </div>
            <div>
                <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="Saídas" /> 
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR').format(summary.withdraws)} kcals</strong>
            </div>
            <div className='high'>
                <header>
                   <p>Total</p>
                   
                </header>
                <strong>{new Intl.NumberFormat('pt-BR').format(summary.total)} kcals</strong>
            </div>
        </Container>
    )
}