import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import yupPassword from 'yup-password';
import { useNavigate } from 'react-router-dom';
import {MdLock,MdEmail} from 'react-icons/md';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {api} from "../../services/api";
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
  SubTitleLogin,
} from "./styles";
import { IFormData } from "./type";

yupPassword(yup);

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
  password: yup
  .string()
  .password()
  .min(3, 'No mínimo 3 caracteres')
  .required('Campo obrigatório'),
}).required();

const Login = () => {

  const navigate = useNavigate();

  const handleNavigate = ({page}: {page: string}) => {
    console.log(page);
    navigate(page);
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate('/feed');
      }else{
        alert("email ou senha invalido ")
      }
    } catch (error) {
      alert('Houve um erro, tente novamente');
    }
  }

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message ?? ''} control={control} placeholder="E-Mail" leftIcon={<MdEmail/>}/>
              <Input name="password" errorMessage={errors?.password?.message ?? ''} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="secondary" type="submit"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={()=>handleNavigate({page:'/cadastro'})}>Cadastrar</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>);
}

export {Login};