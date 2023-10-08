import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, Sou um dev iniciante!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jonathan Ponciano
          </Heading>
          <p>Backend Developer Junior( Cozinhar / Programar / Jogar )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/perfil.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mim
        </Heading>
        <Paragraph>
        Fase 1: Suporte, Infraestrutura e Segurança (2 anos)
        Nesta fase inicial da minha carreira, atuei principalmente em funções relacionadas ao suporte, infraestrutura e segurança. Durante esse período de dois anos, adquiri conhecimentos e experiência em administrar servidores e trabalhar com questões de segurança SOC/SIEM. 
        Essa experiência sólida estabeleceu uma base valiosa para a minha carreira posterior como desenvolvedor de software.
        {' '}
        Fase 2: Desenvolvedor de Software (1 ano)
        Após os primeiros dois anos, fiz a transição para o papel de desenvolvedor de software. 
        Durante esse período de um ano, especializei-me em tecnologias como Python, Django/Flask e Node.js. 
        Trabalhei na Accenture, onde desenvolvi APIs em Python em ambientes AWS/GCP. 
        Também adquiri conhecimentos em CI/CD, usando ferramentas como Jenkins e Rancher, além de habilidades em monitoramento de aplicações com Grafana. 
        Minha paixão por desafios técnicos e minha busca contínua por aprendizado me tornam um desenvolvedor flexível e sempre disposto a enfrentar novos desafios. 
        Estou disponível para colaborar em projetos inovadores e equipes diversificadas.
         
         {' '}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Meus Projetos
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Nasci em Itu - São Paulo
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Trabalhei na Singular Studio Criativo.
          Foi minha primeira experiencia com desenvolvimento, 
          cresci muito e aprendi bastante não só desenvolvimento mas a lidar com pessoas.
        </BioSection>
        <br></br>
        <BioSection>
          <BioYear>2020</BioYear>
          Tabalhei da Prefeitura da Instancia Turisca de Itu
          Além de fornecer suporte e infraestrutura, aprendi muito sobre servidores, 
          segurança e DevOps no geral.
        </BioSection>
        <br></br>
        <BioSection>
          <BioYear>2023</BioYear>
          Trabalhei na Accenture Brasil, como desenvolvedor Backend Python.
          Foi uma experiencia incrivel poder trabalhar em uma empresa gigante,
          onde pude desenvolver e entender como grandes empresas funcionam.
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Linguagens:</BioYear>
          HTML/CSS,Python/Django,Javascript/Nodejs/Next.js,MySQL,Postgres,Bash,Powershell
        </BioSection>
        <br></br>
        <BioSection>
          <BioYear>Um pouco além do básico:</BioYear>
          Conhecimento intermediario de Redes,Docker e servidores Linux, Windows.
          AWS,GCP,GIT e boas noções de Cibersegurança.
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Onde me encontrar e Contato
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JohnPonciano/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @JohnPonciano
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/one_eye_nigth/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @one_eye_nigth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="jonathan.ponciano@icloud.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                jonathan.ponciano@icloud.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://api.whatsapp.com/send?phone=5511988661865" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<PhoneIcon />}
              >
                Whatsapp: (11)988661865
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
