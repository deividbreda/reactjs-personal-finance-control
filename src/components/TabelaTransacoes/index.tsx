import { useTransacoes } from '../../hooks/useTransacoes';
import { Content } from "./styles";

export function Tabela(){
    const { transacaos } = useTransacoes();

    return(
        <Content>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>  
                        <th>Valor</th> 
                        <th>Categoria</th> 
                        <th>Data</th>   
                    </tr>    
                </thead> 

                <tbody>
                    {transacaos.map(transacao => {
                        return(
                            <tr key={transacao.id}>
                                <td> {transacao.titulo} </td>

                                <td className={transacao.tipo}> {
                                    new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transacao.valor)} </td>

                                <td> {transacao.categoria} </td>
                                <td> {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transacao.dataCriado))} </td>
                            </tr>
                        );
                    })}                         
                </tbody>
            </table>
        </Content>
    );
}