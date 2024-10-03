import { Button } from "../../components/Button";
import { Login } from "../../pages/Login";

const App = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <Button title="Entrar" />
      <Button title="Cadastrar" variant="secondary"/>
    </div>
  );
}

export default App;