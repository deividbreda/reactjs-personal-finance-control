import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <GlobalStyle />
    </div>
  );
}


