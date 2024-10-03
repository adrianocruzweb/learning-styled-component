import {MdLock,MdEmail} from 'react-icons/md';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Container,
  Title,
  Wrapper,
  CriarText,
  EsqueciText,
  Column,
  Row,
  TitleLogin,
  SubTitleLogin
} from "./styles";

const Login = () => {
  return (<>
      <Header>Home</Header>
      <Container>
        <Column>
          <Title>
             A plataforma para você com experts, dominar as principais tecnologias
             e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form>
              <Input placeholder="E-Mail" leftIcon={<MdEmail/>}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="secondary" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Cadastrar</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>);
}

export {Login};