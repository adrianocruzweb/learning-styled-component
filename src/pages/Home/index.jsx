import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, TitleHighlight, Title, TextContent  } from "./styles";

const App = () => {
  return (<>
    <div className="App">
      <Header>Home</Header>
      <Container>
        <div>
          <Title>
            <TitleHighlight>
            Implemente
            <br />
            </TitleHighlight>
             O Seu futuro blobal agora
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" />
        </div>
        <div>
          <img src="#" alt="Imagem Principal" />
        </div>
      </Container>
    </div>
    </>);
}

export default App;