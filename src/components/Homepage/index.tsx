import { useState } from "react";
import Modal from 'react-modal';
import { useBoletos } from "../../hooks/useBoletos";
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
    const { boletos } = useBoletos();

    const saldoTotal = transacaos.reduce((saldo, transacao) => {
        if(transacao.tipo === 'entrada') {
            saldo.total += transacao.valor;
        } else {
            saldo.total -= transacao.valor;
        }

        return saldo;

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
                        }).format(saldoTotal.total)} </h2>
                        <div className="buttonsOpenModal">
                            <input className="inputBoleto" type="button" value="Novo Boleto" onClick={abrirModalBoleto} />
                            <input type="button" value="Nova Transação" onClick={abrirModalTransacao} />
                        </div>
                    </div>
                </ContentHeader>

                <ContentHome>
                    { boletos.length ? 
                        <>
                            <h1> Seus boletos</h1>
                            <TabelaBoletos />
                        </>
                    : null }
                    

                    <h1> Suas transações</h1>
                    { transacaos.length ? <Tabela /> : <h2> Cadastre uma nova transação... </h2> } 
                </ContentHome>
            </ContentWidth>
        </ContainerWidth>

    );
}