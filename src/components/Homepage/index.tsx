import { useState } from "react";
import Modal from 'react-modal';
import { useTransacoes } from '../../hooks/useTransacoes';
import { ContainerWidth } from "../../styles/global";
import { Tabela } from "../Tabela";
import { ContentHeader, ContentHome } from "./styles";

interface NovoModalTransacao {
    abrirModal: () => void;
}

export function Homepage({ abrirModal } : NovoModalTransacao){
    const { transacaos } = useTransacoes();

    const summary = transacaos.reduce((acc, transaction) => {
        if(transaction.tipo === 'entrada') {
            acc.total += transaction.valor;
        } else {
            acc.total -= transaction.valor;
        }

        return acc;

    }, {
        total: 0,
    })

    return(
        <ContainerWidth>
            <ContentHeader>
                <h1> Seu saldo</h1>
                <div>
                    <h2> {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)} </h2>
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