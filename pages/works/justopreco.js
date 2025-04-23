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
  <Layout title="JustoPreço">
    <Analytics />
    <Container>
      <Title>
        JustoPreço <Badge>2024</Badge>
      </Title>
      
      <P>
        JustoPreço é uma plataforma para comparação de preços e ofertas, ajudando os consumidores a encontrar os melhores preços para os produtos que desejam comprar.
      </P>
      <P>
        A aplicação utiliza algoritmos de busca e comparação para agregar informações de diversos varejistas, apresentando ao usuário uma visão clara das melhores ofertas disponíveis.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js, React.js, Supabase, Prisma, Vercel</span>
        </ListItem>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://justopreco.xunseen.site/" isExternal>
            JustoPreço <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/justopreco-preview.png"
        alt="JustoPreço"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 