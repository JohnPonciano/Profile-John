import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Jonathan Ponciano - Desenvolvedor de Software & Especialista em Segurança da Informação. 5+ anos de experiência em Python, Java, Go, DevOps e CyberSec. Freelancer disponível para projetos." />
          <meta name="keywords" content="desenvolvedor, software, segurança da informação, backend, frontend, fullstack, react, javascript, python, php, java, go, elixir, devops, cybersecurity, freelancer, brasil, são paulo" />
          <meta name="author" content="Jonathan Ponciano" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="canonical" href="https://profile-john.site/" />
          <meta name="geo.region" content="BR-SP" />
          <meta name="geo.placename" content="São Paulo" />
          <meta name="geo.position" content="-23.5505;-46.6333" />
          <meta name="ICBM" content="-23.5505, -46.6333" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
