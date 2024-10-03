import { Button } from '../Button';
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
    UserPicture
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio"/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
            <Row>
                <MenuRight>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};