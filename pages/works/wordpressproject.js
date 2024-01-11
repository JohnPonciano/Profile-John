import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Thanks Mother Nature">
    <Container>
      <Title>
      Thanks Mother Nature <Badge>2024</Badge>
      </Title>
      <P>
       Meu projeto mais recente, que produzi para mostrar minha competencia com Wordpress
      </P>
      <P>
      Como o WordPress não é extensivamente usado no meio de desenvolvimento, 
      criei este projeto rápido e elegante para demonstrar como pode ser útil para pequenos projetos.
      </P>
      <P>
        Interessante ressaltar que nesse projeto, todos os samples do conteudo puderam ser feitos com uma IA, nativa do Elementor
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress,Elementor e PHP </span>
        </ListItem>
        <ListItem>
          <Meta>Thanks Mother Nature</Meta>
          <Link href="http://thxmomnature.infinityfreeapp.com/">
            Link Hosted in infinityfreeapp {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/wordpressproject.png"
        alt="wordpress"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
