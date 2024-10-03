import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
/* import { Link } from "react-router-dom"; */

const App = () => {
  return (
    <div className="App">
      <Header>Home</Header>
      <Button title="Entrar" />
      <Button title="Cadastrar" variant="secondary"/>
      {/* <Link to="./login">Is para o login</Link> */}
    </div>
  );
}

export default App;