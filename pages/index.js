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
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import Image from 'next/image'
import { Analytics } from "@vercel/analytics/react"
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
        <Analytics />
        <Heading as="h3" variant="section-title">
          Sobre mim
        </Heading>

        <BioSection>
          <p>
          Sou desenvolvedor de software e especialista em segurança da informação com experiência sólida em
programação, análise de vulnerabilidades e implementação de soluções tecnológicas para empresas. 
</p>
<p>Minha trajetória começou em datacenters, o que me deu uma base prática em infraestrutura de TI, evoluindo para projetos que integram sistemas de alta performance e segurança.</p>
        <br></br>
        <p>
        Trabalho com desenvolvimento de sites/softwares, configuração de ERPs , implementação de pontos de
venda com suporte a pagamentos em Bitcoin e otimização de processos para negócios. Meu foco é entregar soluções personalizadas, práticas e inovadoras que atendam às necessidades dos clientes.
        </p>
        </BioSection>
        <br></br>
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
            <BioYear>2020</BioYear>
            Trabalhei na <strong>Prefeitura da Estância Turística de Itu</strong>. Além de fornecer suporte e infraestrutura, aprendi muito sobre servidores, segurança e práticas de DevOps.
            Gerenciamento de infraestrutura e segurança cibernética, supervisionando servidores em vmware, implementando soluções SOC/SIEM, garantindo a conformidade e otimizando sistemas.
            Forneci suporte para operações seguras, garantindo o bom funcionamento dos sistemas de TI.
            Colaborei com equipes multifuncionais para aprimorar as medidas de segurança de TI e simplificar as operações.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2023</BioYear>
            Trabalhei na <strong>Accenture Brasil</strong>, como desenvolvedor Backend Python. 
            Em minha função como desenvolvedor Python na Accenture Brasil, liderei a transformação digital de empresas desenvolvendo APIs em Python usando Flask e Django. 
            Fiz a integração com o Pipefy, gerenciei servidores GCP, criei consultas GraphQL, projetei Webhooks para interação com CRM e criei pipelines de CI/CD usando o GitHub Actions.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2024</BioYear>
            Atualmente, trabalho na <strong>Medens</strong>, onde faço manutenção e desenvolvimento de projetos em <strong>Laravel/PHP</strong>.
            Também estou envolvido em iniciativas de <strong>Inteligência Artificial (IA)</strong>, aplicando minhas habilidades para melhorar a eficiência e inovação dos sistemas em que trabalho.
            Responsável pela manutenção do sistema Mega ERP com Angular e PHP, aumentando a eficiência da equipe comercial por meio de projetos de IA
            Criei consultas Oracle PLSQL e orquestrou contêineres Docker para CI/CD com fluxo de trabalho do GitHub.
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
            <Link href="https://www.linkedin.com/in/jonathan-ponciano-silva/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Jonathan Ponciano
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
                leftIcon={<IoLogoWhatsapp/>}
              >
                +5511988661865
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
