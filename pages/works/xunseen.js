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
  <Layout title="Xunseen">
    <Analytics />
    <Container>
      <Title>
        Xunseen <Badge>2024</Badge>
      </Title>
      
      <P>
        Xunseen é uma plataforma para freelancing e serviços digitais, conectando profissionais talentosos com clientes que buscam soluções personalizadas.
      </P>
      <P>
        A plataforma foi desenvolvida com foco em usabilidade e segurança, oferecendo uma experiência fluida tanto para freelancers quanto para clientes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js, React.js, Supabase, Prisma, Vercel</span>
        </ListItem>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://www.xunseen.site/" isExternal>
            Xunseen <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/xunseen-preview.png"
        alt="Xunseen"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 