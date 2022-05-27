import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { NovoModalTransacao } from "./components/NovoModalTransacao";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [novoModalTransacao, setNovoModalTransacao] = useState(false);

  function handleAbrirModalTransacao(){
      setNovoModalTransacao(true);
  }

  function handleFecharModalTransacao(){
    setNovoModalTransacao(false);
}

  return (
    <div className="App">
      <Header />
      <Homepage abrirModal={handleAbrirModalTransacao}/>

      <NovoModalTransacao onRequestClose={handleFecharModalTransacao} isOpen={novoModalTransacao}/>

      <GlobalStyle />
    </div>
  );
}


