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
import { Analytics } from "@vercel/analytics/react"

const Work = () => (
  <Layout title="ExpoRetroGamesItu">
    <Analytics />
    <Container>
      <Title>
        ExpoRetroGamesItu <Badge>2024</Badge>
      </Title>
      
      <P>
        Plataforma desenvolvida para a exposição de jogos retrô em Itu, oferecendo uma experiência imersiva para os visitantes.
      </P>
      <P>
        O site foi desenvolvido com tecnologias modernas para garantir uma experiência fluida e responsiva, permitindo que os usuários naveguem facilmente entre as diferentes seções da exposição.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js, React.js, Supabase, Prisma, Vercel</span>
        </ListItem>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://www.exporetrogamesitu.com.br/" isExternal>
            ExpoRetroGamesItu <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/expoRetroGamesItu.png"
        alt="ExpoRetroGamesItu"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 