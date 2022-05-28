import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Boleto {
    id: number;
    titulo: string;
    valor: number;
    parcelas: number;
    categoria: string;
    vencimento: string;
}

interface BoletoProviderProps {
    children: ReactNode;
}

type BoletoInput = Omit<Boleto, 'id'>

interface BoletosContextData {
    boletos: Boleto[],
    createBoletos: (boleto: BoletoInput) => Promise<void>;
}

const BoletosContext = createContext<BoletosContextData>({} as BoletosContextData);

export function BoletosProvider({ children }: BoletoProviderProps){
    const [boletos, setBoletos] = useState<Boleto[]>([]);

    useEffect(() => {
        api.get('finances/boletos')
        .then(response => setBoletos(response.data.boletos))
    }, [])

    async function createBoletos(boletoInput: BoletoInput){
        const response = await api.post('finances/boletos', {
            ...boletoInput,
        });
        const { boleto } = response.data;

        setBoletos([...boletos, boleto,]);
    }


    return(
        <BoletosContext.Provider value = {{ boletos, createBoletos }}>
            {children}
        </BoletosContext.Provider>
    );
}

export function useBoletos(){
    const context = useContext(BoletosContext);

    return context;
}