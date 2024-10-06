import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import yupPassword from 'yup-password';
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
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
import { useNavigate } from "react-router-dom";

yupPassword(yup);

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
  password: yup
  .string()
  .password()
  .min(3, 'No mínimo 3 caracteres')
  .required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
}).required();

const Cadastro = () => {

  const navigate = useNavigate();

  const handleNavigate = ({page}: {page: string}) => {
    console.log(page);
    navigate(page);
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

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
            <form>
              <Input name="name" errorMessage={errors?.name?.message ?? ''} control={control} placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
              <Input name="email" errorMessage={errors?.email?.message ?? ''} control={control} placeholder="E-Mail" leftIcon={<MdEmail/>}/>
              <Input name="password" errorMessage={errors?.password?.message ?? ''} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Criar minha conta" variant="secondary"/>
            </form>
            <SecondRegisterSubtitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SecondRegisterSubtitle>
            <Column onClick={() => handleNavigate({page: '/login'})}>
              <AlreadyHaveText>Já tenho conta.</AlreadyHaveText>
              <AlreadyHaveTextColor>Fazer login</AlreadyHaveTextColor>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>);
}

export {Cadastro};