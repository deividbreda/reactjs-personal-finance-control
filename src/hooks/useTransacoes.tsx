import { ReactNode, useContext, useEffect, useState, createContext } from "react";
import { api } from "../services/api";

interface Transacao {
    id: number;
    titulo: string;
    valor: number;
    categoria: string;
    tipo: string;
    dataCriado: string;
}

interface TransacaoProviderProps {
    children: ReactNode;
}

type TransacaoInput = Omit<Transacao, 'id' | 'dataCriado'>;

interface TransacoesContextData {
    transacaos: Transacao[];
    createTransacao: (transacao: TransacaoInput) => Promise<void>;
}

const TransactionsContext = createContext<TransacoesContextData>(
    {} as TransacoesContextData
);

export function TransacoesProvider({ children }: TransacaoProviderProps){
    const [transacaos, setTransacoes] = useState<Transacao[]>([]);

    useEffect(() => {
        api.get('transacaos')
        .then(response => setTransacoes(response.data.transacaos))
    }, [])

    async function createTransacao(transacaoInput: TransacaoInput){
        const response = await api.post('/transacaos', {
            ...transacaoInput, 
            dataCriado: new Date(),
        })
        const { transacao } = response.data;

        setTransacoes([
            ...transacaos, transacao,
        ]);
    }

    return(
        <TransactionsContext.Provider value={{ transacaos, createTransacao }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransacoes(){
    const context = useContext(TransactionsContext);

    return context;
}