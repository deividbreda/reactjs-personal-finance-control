import { Content } from "./styles";

export function TabelaBoletos() {
    return(
        <Content>
            <table>
                <thead>
                    <tr>
                        <th> Titúlo </th>
                        <th> Valor </th>
                        <th> Parcelas </th>
                        <th> Categoria </th>
                        <th> Data </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> X-Box One </td>
                        <td> R$ 1.200,00 </td>
                        <td> 3x </td>
                        <td> Lazer </td>
                        <td> 21/02/2022 </td>
                        <td> <button> Pagar </button> </td>
                    </tr>
                </tbody>
            </table>
        </Content>
    );
}