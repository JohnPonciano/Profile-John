import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Hakku-C2">
    <Container>
      <Title>
      Hakku-C2 <Badge>2023</Badge>
      </Title>
      <P>
      Hakku-C2, é um projeto de SIEM, que eu estou desenvolvendo,
      É um projeto que está bem no inicio ainda, e tem muitas coisas para serem ajustadas e features a serem criadas.
      </P>
      <P>
        Você pode dar uma olhada nele no meu github junto com a documentação!
      </P>
      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JohnPonciano/Hakku_web_c2">
            Documentação{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nodejs,Nextjs Powershell,SQLITE</span>
        </ListItem>
      </List>
      <WorkImage  src="/images/works/newimg/hakku-C2.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
