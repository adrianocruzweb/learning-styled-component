import { FiThumbsUp } from 'react-icons/fi';
import {
    ImageBackgorund,
    CardContainer,
    UserPicture,
    UserInfo,
    PostInfo,
    Content,
    HasInfo,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackgorund />
        <Content>
            <UserInfo>
                <UserPicture />
                <div>
                    <h4>Adriano Cruz</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de Html e CSS</h4>
                <p>Projeto feito o curso de Html e Css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp/> 18
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card};