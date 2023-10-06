import {
  Container,
  Badge,
  Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="loficenter">
    <Container>
      <Title>
        LofiCenter <Badge>2022-</Badge>
      </Title>
      <P>
        Nada muito complexo, era mais um exercicio de frontend usando HTML/CSS/JS o mais puro possivel
      </P>
      <P>
        Preview dele: 
        <Link href='https://johnponciano.github.io/Music_Player_V2/'>Acesse aqui
        <ExternalLinkIcon mx="2px" />
        </Link>
        
      </P>
      <WorkImage src="/images/works/newimg/loficenter.png" alt="Inkdrop" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
