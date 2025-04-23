import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Analytics } from "@vercel/analytics/react"

import thumbWalletPass from '../public/images/works/newimg/walletpass-preview.png'
import justoprecoPreview from '../public/images/works/newimg/justopreco-preview.png'
import medensproject from '../public/images/works/newimg/medensproject.png'
import expoRetroGamesItu from '../public/images/works/newimg/expoRetroGamesItu.png'
import xunseenPreview from '../public/images/works/newimg/xunseen-preview.png'

const Works = () => (
  <Layout title="Works">
    <Analytics />
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>

        <Section>
          <WorkGridItem
            id="medensproject"
            title="Medens"
            thumbnail={medensproject}
          >
            Um novo respiro para uma nossa marca
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="expoRetroGamesItu"
            title="ExpoRetroGamesItu"
            thumbnail={expoRetroGamesItu}
          >
            Plataforma para exposição de jogos retrô em Itu
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="walletpass"
            title="WalletPass"
            thumbnail={thumbWalletPass}
          >
            Armazena e criptografa suas senhas, uma carteira de senhas seguras
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="xunseen"
            title="Xunseen"
            thumbnail={xunseenPreview}
          >
            Plataforma para freelancing e serviços digitais
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="justopreco"
            title="JustoPreço"
            thumbnail={justoprecoPreview}
          >
            Plataforma para comparação de preços e ofertas
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
