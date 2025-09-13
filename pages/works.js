import { Container, Heading, SimpleGrid, Box, Text, Badge } from '@chakra-ui/react'
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
        Projetos Corporativos & Freelancing
      </Heading>

      <Text mb={6} color="gray.600">
        Projetos desenvolvidos em ambientes corporativos e freelancing, 
        focando em soluções escaláveis e de alto impacto.
      </Text>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        {/* Projeto Atual - Destaque */}
        <Section>
          <Box position="relative">
            <Badge 
              position="absolute" 
              top={2} 
              right={2} 
              colorScheme="green" 
              zIndex={1}
            >
              Atual
            </Badge>
            <WorkGridItem
              id="xunseen"
              title="X UNSEEN"
              thumbnail={xunseenPreview}
            >
              Plataforma para freelancing e serviços digitais - Projeto atual como Backend Developer
            </WorkGridItem>
          </Box>
        </Section>

        {/* Projetos Corporativos */}
        <Section delay={0.1}>
          <Box position="relative">
            <Badge 
              position="absolute" 
              top={2} 
              right={2} 
              colorScheme="blue" 
              zIndex={1}
            >
              Corporativo
            </Badge>
            <WorkGridItem
              id="medensproject"
              title="Medens"
              thumbnail={medensproject}
            >
              Sistema interno com Angular e PHP - Redução de 70% no tempo de deploy
            </WorkGridItem>
          </Box>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="expoRetroGamesItu"
            title="ExpoRetroGamesItu"
            thumbnail={expoRetroGamesItu}
          >
            Plataforma para exposição de jogos retrô em Itu - Projeto público
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="walletpass"
            title="WalletPass"
            thumbnail={thumbWalletPass}
          >
            Carteira de senhas seguras com criptografia - Projeto pessoal
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="justopreco"
            title="JustoPreço"
            thumbnail={justoprecoPreview}
          >
            Plataforma para comparação de preços e ofertas - Freelancing
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
