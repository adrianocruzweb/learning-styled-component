import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoDio.png'
import {
    Container,
    Column,
    Input,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture,
    LogoDIO,
} from './styles';

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleNavigate = ({page}) => {
        console.log(page);
        navigate(page);
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <LogoDIO src={logo} alt="Logo da dio"/>
                {autenticado ? (
                    <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ): null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/17552862?s=400&u=b6bd20d83df4236a3a80306794ed63ed9145da28&v=4"/>
                ) : (
                    <>
                    <MenuRight>Home</MenuRight>
                    <Button title="Entrar" onClick={() => handleNavigate({page: '/login'})}/>
                    <Button title="Cadastrar" onClick={() => handleNavigate({page: '/cadastro'})}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};