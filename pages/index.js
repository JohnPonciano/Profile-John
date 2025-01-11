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
        Hello, Sou um dev backend e apaixonado por programação e culinária.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jonathan Ponciano
          </Heading>
          <p>Backend Developer ( Programar e Cozinhar )</p>
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

        <BioSection>
          <BioYear>Fase 1: Suporte & Infraestrutura (2019 - 2021)</BioYear>
          <p>
            Minha jornada começou na <strong>Singular Studio Criativo</strong>, onde explorei o desenvolvimento pela primeira vez. Ali, aprendi não só aspectos técnicos, mas também a importância do trabalho em equipe e comunicação.
          </p>
          <p>
            Depois, na <strong>Prefeitura da Estância Turística de Itu</strong>, dei o próximo passo, oferecendo suporte e infraestrutura. Também aprofundei meus conhecimentos em servidores, segurança e práticas de DevOps, solidificando minha base em TI.
          </p>
        </BioSection>

        <BioSection>
          <BioYear>Fase 2: Desenvolvimento de Software (2021 - 2022)</BioYear>
          <p>
            Transição para o mundo do <strong>desenvolvimento de software</strong>, com foco em tecnologias como Python, Django, Node.js e APIs. Durante esse ano, trabalhei na <strong>Accenture</strong>, onde desenvolvi soluções em ambientes AWS/GCP.
          </p>
          <p>
            Além disso, adquiri experiência em CI/CD com Jenkins, Rancher e ferramentas de monitoramento como Grafana. Aprimorei minhas habilidades técnicas enquanto aprendi a lidar com desafios complexos e a buscar sempre a melhor solução.
          </p>
        </BioSection>

        <BioSection>
          <BioYear>Fase 3: O Futuro</BioYear>
          <p>
            Estou sempre em busca de inovação e novos desafios. Hoje, além de backend, estou focado em áreas emergentes como inteligência artificial e soluções para pontos de venda (PDVs) com <strong>Bitcoin</strong>.
          </p>
          <p>
            Com um olhar no futuro, estou pronto para colaborar em projetos que unem tecnologia de ponta e soluções criativas. Se você também tem uma visão inovadora, vamos conversar!
          </p>
        </BioSection>
      </Section>

      <Section delay={0.3}> 
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
            Trabalhei na <strong>Singular Studio Criativo</strong>. Foi minha primeira experiência com desenvolvimento, onde cresci muito e aprendi bastante, não só no aspecto técnico, mas também em como lidar com pessoas e comunicação em equipe.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2020</BioYear>
            Trabalhei na <strong>Prefeitura da Estância Turística de Itu</strong>. Além de fornecer suporte e infraestrutura, aprendi muito sobre servidores, segurança e práticas de DevOps.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2023</BioYear>
            Trabalhei na <strong>Accenture Brasil</strong>, como desenvolvedor Backend Python. Foi uma experiência incrível poder trabalhar em uma empresa gigante, onde pude desenvolver e entender como grandes empresas funcionam.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2024 - Presente</BioYear>
            Atualmente, trabalho na <strong>Medens</strong>, onde faço manutenção e desenvolvimento de projetos em <strong>Laravel/PHP</strong>. Também estou envolvido em iniciativas de <strong>Inteligência Artificial (IA)</strong>, aplicando minhas habilidades para melhorar a eficiência e inovação dos sistemas em que trabalho.
          </BioSection>
        </Section>


      <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
    Skills
  </Heading>
  
  <BioSection>
    <BioYear>Linguagens e Frameworks</BioYear>
    <p>HTML/CSS, Python (Django/Flask), JavaScript (Node.js/Next.js), PHP (Laravel), MySQL, PostgreSQL, Bash, PowerShell</p>
  </BioSection>
  <br />
  
  <BioSection>
    <BioYear>Ferramentas e Tecnologias</BioYear>
    <p>Docker, CI/CD (Jenkins, Rancher), AWS, GCP, Git, Grafana, Redis, RabbitMQ</p>
  </BioSection>
  <br />

  <BioSection>
    <BioYear>Práticas de DevOps e Infraestrutura</BioYear>
    <p>Configuração e manutenção de servidores Linux/Windows, automação de deploy, monitoramento de aplicações, práticas de segurança (Cibersegurança)</p>
  </BioSection>
  <br />
  
  <BioSection>
    <BioYear>Inteligência Artificial</BioYear>
    <p>Experiência com algoritmos de IA e machine learning, implementação de soluções inteligentes e automação de processos.</p>
  </BioSection>
  <br />
  
  <BioSection>
    <BioYear>Outras Competências</BioYear>
    <p>Suporte e infraestrutura, gerenciamento de projetos, trabalho em equipe, comunicação eficaz, resolução de problemas técnicos complexos.</p>
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
            <Link href="mailto:jonathan.ponciano@icloud.com" target="_blank">
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
