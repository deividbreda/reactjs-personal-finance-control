import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { NovoModalTransacao } from "./components/NovoModalTransacao";
import { GlobalStyle } from "./styles/global";
import { TransacoesProvider } from './hooks/useTransacoes';
import { NovoModalBoleto } from "./components/NovoModalBoleto";
import { BoletosProvider } from "./hooks/useBoletos";

Modal.setAppElement('#root');

export function App() {
  const [novoModalTransacao, setNovoModalTransacao] = useState(false);
  const [novoModalBoleto, setNovoModalBoleto] = useState(false);

  function handleAbrirModalTransacao(){
    setNovoModalTransacao(true);
  }

  function handleFecharModalTransacao(){
    setNovoModalTransacao(false);
  }

  function handleAbrirModalBoleto(){
    setNovoModalBoleto(true);
  }

  function handleFecharModalBoleto(){
    setNovoModalBoleto(false);
  }


  return (
    <TransacoesProvider>
      <BoletosProvider>
      <Header />
      <Homepage 
        abrirModalTransacao={handleAbrirModalTransacao}
        abrirModalBoleto={handleAbrirModalBoleto}/>

      <NovoModalBoleto isOpen={novoModalBoleto} onRequestClose={handleFecharModalBoleto}/>
      <NovoModalTransacao onRequestClose={handleFecharModalTransacao} isOpen={novoModalTransacao}/>

      <GlobalStyle />
      </BoletosProvider>
    </TransacoesProvider>
  );
}


