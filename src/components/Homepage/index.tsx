import { useState } from "react";
import Modal from 'react-modal';
import { ContainerWidth } from "../../styles/global";
import { Tabela } from "../Tabela";
import { ContentHeader, ContentHome } from "./styles";

interface NovoModalTransacao {
    abrirModal: () => void;
}

export function Homepage({ abrirModal } : NovoModalTransacao){
    return(
        <ContainerWidth>
            <ContentHeader>
                <h1> Seu saldo</h1>
                <div>
                    <h2> R$ 1.200,00 </h2>
                    <input type="button" value="Nova Transação" onClick={abrirModal} />
                </div>
            </ContentHeader>

            <ContentHome>
                <h1> Suas transações</h1>
                <Tabela />
            </ContentHome>
        </ContainerWidth>

    );
}