import { Card } from '../../components/Card';
import { Header } from "../../components/Header";
import { UserInfo } from '../../components/UserInfo';
import { Column, Container, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (<>
    <div className="App">
      <Header>Home</Header>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking Top 5 da Semana</TitleHighlight>
          <UserInfo percentual={35} nome="Adriano Cruz" image="https://avatars.githubusercontent.com/u/17552862?s=400&u=b6bd20d83df4236a3a80306794ed63ed9145da28&v=4"/>
          <UserInfo percentual={80} nome="Adriano Cruz" image="https://avatars.githubusercontent.com/u/17552862?s=400&u=b6bd20d83df4236a3a80306794ed63ed9145da28&v=4"/>
          <UserInfo percentual={20} nome="Adriano Cruz" image="https://avatars.githubusercontent.com/u/17552862?s=400&u=b6bd20d83df4236a3a80306794ed63ed9145da28&v=4"/>
          <UserInfo percentual={55} nome="Adriano Cruz" image="https://avatars.githubusercontent.com/u/17552862?s=400&u=b6bd20d83df4236a3a80306794ed63ed9145da28&v=4"/>
        </Column>
      </Container>
    </div>
    </>);
}

export {Feed};