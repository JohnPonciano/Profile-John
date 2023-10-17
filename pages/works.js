import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbLofiCenter from '../public/images/works/newimg/loficenter.png'
import thumbWalknote from '../public/images/works/newimg/hakku-C2.png'
import thumbFourPainters from '../public/images/works/newimg/walletpass.png'
import thumbInetTCP from '../public/images/works/newimg/InetCHAT.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem id="inkdrop" title="LofiCenter" thumbnail={thumbLofiCenter}>
            Mini radio Lofi, que roda localmente 
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="walknote"
            title="Hakku-C2"
            thumbnail={thumbWalknote}
          >
            Um app que estou desenvolvendo no momento, que funciona semelhante a SIEM, 
            puxando e armazenando dados das maquinas que possui seu Agent
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Wallet-Pass"
            thumbnail={thumbFourPainters}
          >
            Armazena e criptografa suas senhas, em um banco de dados.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="inetpy"
            title="InetChat-TCP"
            thumbnail={thumbInetTCP}
          >
            Pequeno sistema de chat tcp, com suporte ao ngrok
          </WorkGridItem>
        </Section>
      </SimpleGrid>


     


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
