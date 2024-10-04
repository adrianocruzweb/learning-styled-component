import { Header } from "../../components/Header";
import {
  Column,
  Container,
  Title
} from "./styles";

const Cadastro = () => {




  return (<>
      <Header>Home</Header>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>form</Column>
      </Container>
    </>);
}

export {Cadastro};