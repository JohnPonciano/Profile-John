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
        <meta name="description" content="Jonathan Ponciano - Desenvolvedor de Software & Especialista em Segurança da Informação. 5+ anos de experiência em Python, Java, Go, DevOps e CyberSec. Freelancer disponível para projetos." />
        <meta name="author" content="Jonathan Ponciano" />
        <meta name="keywords" content="desenvolvedor, software, segurança da informação, backend, frontend, fullstack, react, javascript, python, php, java, go, elixir, devops, cybersecurity, freelancer, brasil, são paulo" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://profile-john.site/" />
        <meta property="og:title" content="Jonathan Ponciano - Desenvolvedor de Software & Especialista em CyberSec" />
        <meta property="og:description" content="Desenvolvedor de Software com 5+ anos de experiência. Especialista em Python, Java, Go, DevOps e Segurança da Informação. Freelancer disponível para projetos." />
        <meta property="og:image" content="https://profile-john.site/card.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Jonathan Ponciano - Desenvolvedor de Software" />
        <meta property="og:site_name" content="Profile John" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://profile-john.site/" />
        <meta property="twitter:title" content="Jonathan Ponciano - Desenvolvedor de Software & Especialista em CyberSec" />
        <meta property="twitter:description" content="Desenvolvedor de Software com 5+ anos de experiência. Especialista em Python, Java, Go, DevOps e Segurança da Informação. Freelancer disponível para projetos." />
        <meta property="twitter:image" content="https://profile-john.site/card.png" />
        <meta property="twitter:image:alt" content="Jonathan Ponciano - Desenvolvedor de Software" />

        <title>Jonathan Ponciano - Desenvolvedor de Software & Especialista em CyberSec</title>
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jonathan Ponciano",
              "jobTitle": "Desenvolvedor de Software & Especialista em Segurança da Informação",
              "description": "Desenvolvedor de Software com 5+ anos de experiência. Especialista em Python, Java, Go, DevOps e Segurança da Informação. Freelancer disponível para projetos.",
              "url": "https://profile-john.site",
              "image": "https://profile-john.site/card.png",
              "sameAs": [
                "https://www.linkedin.com/in/jonathan-ponciano-silva/",
                "https://github.com/JohnPonciano/",
                "https://relevance.substack.com"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "alumniOf": [
                "Prefeitura de Itu",
                "Accenture Brasil",
                "Medens"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "X UNSEEN",
                "description": "Freelancer - Back End Developer | DevOps | CyberSec"
              },
              "knowsAbout": [
                "Python",
                "Java",
                "Go",
                "Elixir",
                "JavaScript",
                "Node.js",
                "PHP",
                "Laravel",
                "Django",
                "FastAPI",
                "Spring Boot",
                "Docker",
                "DevOps",
                "CI/CD",
                "AWS",
                "GCP",
                "Kubernetes",
                "Cybersecurity",
                "Burp Suite",
                "Nmap",
                "Metasploit",
                "Wireshark"
              ],
              "email": "jonathan.ponciano@icloud.com",
              "telephone": "+55-11-98866-1865"
            })
          }}
        />
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
