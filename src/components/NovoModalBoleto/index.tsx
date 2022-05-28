import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from '../../assets/close.svg'
import { useBoletos } from "../../hooks/useBoletos";
import { Content } from "./styles";

interface NovoModalBoletoProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NovoModalBoleto({ isOpen, onRequestClose }: NovoModalBoletoProps){
    const { createBoletos } = useBoletos();

    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [parcelas, setParcelas] = useState(0);
    const [vencimento, setVencimento] = useState('');

    async function handleNovoBoleto(event: FormEvent) {
        event.preventDefault();

        await createBoletos({
            titulo,
            valor,
            categoria,
            parcelas,
            vencimento,
        })

        setTitulo('');
        setValor(0);
        setCategoria('');
        setVencimento('');
        onRequestClose();
    }

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        overlayClassName="reactModalOverlay"
        className="reactModalContent">

            <button type="button" onClick={onRequestClose} 
            className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> </button>

            <Content> 
                <h1> Novo Boleto </h1>
                <input type="text" placeholder="Titúlo..." value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <input type="number" placeholder="0" value={valor} onChange={(e) => setValor(Number(e.target.value))}/>
                <input type="number" placeholder="0" value={parcelas} onChange={(e) => setParcelas(Number(e.target.value))}/>
                <input type="text" placeholder="Categoria..." value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                <input type="date" placeholder="Data..." value={vencimento} onChange={(e) => setVencimento(e.target.value)}/>
                <input type="submit" value="CONFIRMAR" onClick={handleNovoBoleto}/>
            </Content>
        </Modal>
    );
}