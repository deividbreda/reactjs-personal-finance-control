import { ContainerWidth } from "../../styles/global";
import { Content } from "./styles";

export function Tabela(){
    return(
        <ContainerWidth>
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
                    <tr>
                        <td> Mercado </td>
                        <td className="saida"> R$ 300,00 </td>
                        <td> Compras </td>
                        <td> 14/02/2022 </td>
                    </tr> 

                    <tr>
                        <td> Mercado </td>
                        <td className="entrada"> R$ 300,00 </td>
                        <td> Compras </td>
                        <td> 14/02/2022 </td>
                    </tr>            
                </tbody>
            </table>
            </Content> 
        </ContainerWidth>
    );
}