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
  <Layout title="Wallet-Pass">
    <Analytics />
    <Container>
      <Title>
        Wallet-Pass <Badge>2023</Badge>
      </Title>
      <P>
       Meu projeto mais recente, basicamente é um gerador de senhas, já esta funcional.
       Mas mais features precisam ser adicionadas.
      </P>
      <P>
      Ex: recuperação de dados via token unico que normalmente é gerado.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nextjs,Prisma</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/JohnPonciano/WalletPass">
            Link de Acesso ao Repositorio <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Wallet-pass ONLINE</Meta>
          <Link href="https://wallet-pass-hazel.vercel.app/">
            Link Hosted in VERCEL {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage
        src="/images/works/newimg/walletpass.png"
        alt="walknote"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
