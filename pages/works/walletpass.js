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
  <Layout title="WalletPass">
    <Analytics />
    <Container>
      <Title>
        WalletPass <Badge>2024</Badge>
      </Title>
      
      <P>
        WalletPass é uma aplicação segura para armazenamento e gerenciamento de senhas, desenvolvida com foco em privacidade e usabilidade.
      </P>
      <P>
        A aplicação utiliza criptografia avançada para proteger as informações sensíveis dos usuários, permitindo que eles acessem suas senhas de forma segura em qualquer dispositivo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js, React.js, Supabase, Prisma, Vercel</span>
        </ListItem>
        <ListItem>
          <Meta>Site</Meta>
          <Link href="https://walletpass.xunseen.site/" isExternal>
            WalletPass <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/walletpass-preview.png"
        alt="WalletPass"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 