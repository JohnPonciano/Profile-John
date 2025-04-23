import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jonathan Ponciano - Desenvolvedor de Software & Especialista em Segurança da Informação. Portfólio com projetos em React, Node.js, Python e mais." />
        <meta name="author" content="Jonathan Ponciano" />
        <meta name="keywords" content="desenvolvedor, software, segurança da informação, backend, frontend, fullstack, react, javascript, python, php" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.johnponciano.com.br" />
        <meta property="og:title" content="Jonathan Ponciano - Desenvolvedor de Software" />
        <meta property="og:description" content="Portfólio profissional com projetos em React, Node.js, Python e mais. Especialista em desenvolvimento web e segurança da informação." />
        <meta property="og:image" content="https://www.johnponciano.com.br/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.johnponciano.com.br" />
        <meta property="twitter:title" content="Jonathan Ponciano - Desenvolvedor de Software" />
        <meta property="twitter:description" content="Portfólio profissional com projetos em React, Node.js, Python e mais. Especialista em desenvolvimento web e segurança da informação." />
        <meta property="twitter:image" content="https://www.johnponciano.com.br/og-image.jpg" />

        <title>Jonathan Ponciano - Desenvolvedor de Software</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
