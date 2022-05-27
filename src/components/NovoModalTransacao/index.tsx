import Modal from "react-modal";
import { CheckBoxTipo, ContentForm, ContentTipoTransacao } from "./styles";
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from "react";
import { useTransacoes } from '../../hooks/useTransacoes';

interface NovoModalTransacaoProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NovoModalTransacao({ isOpen, onRequestClose }: NovoModalTransacaoProps){
    const { createTransacao } = useTransacoes();

    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [tipo, setTipo] = useState('entrada');

    async function handleNovaTransacao(event: FormEvent){
        event.preventDefault();

        await createTransacao({
            titulo,
            valor,
            categoria,
            tipo,
        })

        setTitulo('');
        setValor(0);
        setCategoria('')
        setTipo('entrada')
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

                <ContentForm onSubmit={handleNovaTransacao}>
                    <h1> Nova Transação </h1>

                    <input type="text" value={titulo} placeholder="Título..." 
                    onChange={(e) => setTitulo(e.target.value)}/>

                    <input type="number" value={valor} placeholder="Valor..." 
                    onChange={(e) => setValor(Number(e.target.value))}/>

                    <input type="text" value={categoria} placeholder="Categoria..." 
                    onChange={(e) => setCategoria(e.target.value)}/>

                    <ContentTipoTransacao>
                        
                        <CheckBoxTipo type="button" onClick={() => {setTipo('entrada');}}
                        isActive={tipo === 'entrada'} activeColor="verde"> Entrada </CheckBoxTipo>

                        <CheckBoxTipo type="button" onClick={() => {setTipo('saida');}}
                        isActive={tipo === 'saida'} activeColor="vermelho"> Saída </CheckBoxTipo>

                    </ContentTipoTransacao>

                    <input type="submit" value="CONFIRMAR" />
                </ContentForm>
        </Modal>
    );
}