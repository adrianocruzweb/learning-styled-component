import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Row } from "../Login/styles";
import {
  AlreadyHaveText,
  AlreadyHaveTextColor,
  Column,
  Container,
  RegisterSubtitle,
  RegisterTitle,
  SecondRegisterSubtitle,
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
            <RegisterTitle>Comece agora grátis</RegisterTitle>
            <RegisterSubtitle>Crie sua conta e make the change._</RegisterSubtitle>
            <input name="nome"/>
            <br />
            <input name="nome"/>
            <br />
            <input name="nome"/>
            <br />
            <Button title="Criar minha conta" variant="secondary"/>
            <br />
            <SecondRegisterSubtitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SecondRegisterSubtitle>
            <Column>
              <AlreadyHaveText>Já tenho conta.</AlreadyHaveText>
              <AlreadyHaveTextColor>Fazer login</AlreadyHaveTextColor>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>);
}

export {Cadastro};