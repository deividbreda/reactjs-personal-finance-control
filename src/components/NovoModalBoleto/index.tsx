import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from '../../assets/close.svg'
import { Content } from "./styles";

interface NovoModalBoletoProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NovoModalBoleto({ isOpen, onRequestClose }: NovoModalBoletoProps){
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [vencimento, setVencimento] = useState('');

    function handleNovoBoleto(event: FormEvent) {
        event.preventDefault();

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
                <input type="date" placeholder="Data..." value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                <input type="submit" value="CONFIRMAR" onClick={handleNovoBoleto}/>
            </Content>
        </Modal>
    );
}