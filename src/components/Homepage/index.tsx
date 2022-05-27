import { useState } from "react";
import Modal from 'react-modal';
import { useTransacoes } from '../../hooks/useTransacoes';
import { ContainerWidth } from "../../styles/global";
import { TabelaBoletos } from "../TabelaBoletos";
import { Tabela } from "../TabelaTransacoes";
import { ContentHeader, ContentHome, ContentWidth } from "./styles";

interface NovoModalTransacao {
    abrirModalTransacao: () => void;
    abrirModalBoleto: () => void;
}

export function Homepage({ abrirModalTransacao, abrirModalBoleto } : NovoModalTransacao){
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
            <ContentWidth>
                <ContentHeader>
                    <h1> Seu saldo</h1>
                    <div>
                        <h2> {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)} </h2>
                        <div className="buttonsOpenModal">
                            <input className="inputBoleto" type="button" value="Novo Boleto" onClick={abrirModalBoleto} />
                            <input type="button" value="Nova Transação" onClick={abrirModalTransacao} />
                        </div>
                    </div>
                </ContentHeader>

                <ContentHome>
                    <h1> Seus boletos</h1>
                    <TabelaBoletos />

                    <h1> Suas transações</h1>
                    { transacaos.length ? <Tabela /> : <h2> Cadastre uma nova transação... </h2> } 
                </ContentHome>
            </ContentWidth>
        </ContainerWidth>

    );
}