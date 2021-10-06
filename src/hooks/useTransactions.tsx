import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';


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

type TransactionsContextData = {
    transactions: transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>,
}

type TransactionInput = Omit<transaction, 'id' | 'createAt'>

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions ))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createAt: new Date()})
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction,                
        ])
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context;
}