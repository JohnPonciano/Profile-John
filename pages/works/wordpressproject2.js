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
  <Layout title="Kuvshnov Gallery">
    <Container>
      <Title>
      Kuvshnov Gallery <Badge>2024</Badge>
      </Title>
      <P>
       Meu projeto mais recente, que produzi para mostrar minha competencia com Wordpress.
      </P>
      <P>
      Foi apenas um experimento um pouco mais minimalista e artistico, 
      onde eu crio uma pequena galeria para um dos meu artistas preferidos atuais.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress,Elementor e PHP </span>
        </ListItem>
        <ListItem>
          <Meta>Kuvshnov Gallery</Meta>
          <Link href="http://kuvshnovgallery.infinityfreeapp.com/">
            Link Hosted in infinityfreeapp {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/wordpressproject2.png"
        alt="wordpress"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
