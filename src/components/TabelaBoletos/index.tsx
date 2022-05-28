import { useBoletos } from "../../hooks/useBoletos";
import { Content } from "./styles";

export function TabelaBoletos() {
    const { boletos } = useBoletos();

    function handlePagarBoleto(){
        
    }

    return(
        <Content>
            <table>
                <thead>
                    <tr>
                        <th> Titúlo </th>
                        <th> Valor </th>
                        <th> Parcelas </th>
                        <th> Categoria </th>
                        <th> Vencimento </th>
                    </tr>
                </thead>

                <tbody>
                    {boletos.map(boleto => {
                        return(
                            <tr key={boleto.id}>
                                <td> {boleto.titulo} </td>
                                <td> {boleto.valor} </td>
                                <td> {boleto.parcelas} </td>
                                <td> {boleto.categoria} </td>
                                <td> {boleto.vencimento} </td>
                                <td> <button onClick={handlePagarBoleto}> Pagar </button> </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Content>
    );
}