import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  Title,
  Wrapper
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
        <Column>
          <Wrapper>
          <h3>Comece agora grátis</h3>
          <p>Crie sua conta e make the change._</p>
          <input name="nome"/>
          <br />
          <input name="nome"/>
          <br />
          <input name="nome"/>
          <br />
          <Button title="Criar minha conta"/>
          <br />
          <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
          <p>Já tenho conta. <strong>Fazer login</strong></p>
          </Wrapper>
        </Column>
      </Container>
    </>);
}

export {Cadastro};