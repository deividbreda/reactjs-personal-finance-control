import { ContainerWidth } from "../../styles/global";
import { Content } from "./styles";

export function Header(){
    return (
        <Content>
            <ContainerWidth>
                <h1 className="tituloHeader"> Personal Finance Control</h1>
                <h1> Olá, seja bem vindo! </h1>
            </ContainerWidth>
        </Content>
    );
}