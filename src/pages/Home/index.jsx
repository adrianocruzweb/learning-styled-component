import { ButtonContainer } from "../../components/Button/styles";

const App = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <ButtonContainer title="Entrar" />
      <ButtonContainer title="Cadastrar" variant="secondary"/>
    </div>
  );
}

export default App;