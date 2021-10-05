import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';


type transaction = {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string,
}

type TransactionProviderProps = {
    children: ReactNode
}

export const TransactionsContext = createContext<transaction[]>([]);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions ))
    }, [])

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}