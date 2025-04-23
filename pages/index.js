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
        Hello, Sou um desenvolvedor de software e especialista em segurança da informação.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jonathan Ponciano
          </Heading>
          <p>Desenvolvedor de Software & Especialista em Segurança da Informação</p>
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
          Desenvolvedor Backend | DevOps | Python, Elixir, Node.js | CI/CD, Docker e sistemas escaláveis
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
            <BioYear>2024-2025</BioYear>
            Trabalhei na <strong>Medens</strong> como <strong>Desenvolvedor Full Stack</strong>.
            Mantive e evoluí o sistema Mega ERP com Angular e PHP, otimizando a rotina da equipe comercial.
            Desenvolvi um chatbot de atendimento que reduziu o tempo médio de resposta em 40%.
            Criei uma IA de apoio técnico que reduziu em 50% a curva de aprendizado das novas vendedoras.
            Implementei consultas Oracle PL/SQL e pipelines CI/CD com Docker e GitHub Actions, reduzindo o tempo de deploy em 70%.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2022-2023</BioYear>
            Trabalhei na <strong>Accenture Brasil</strong> como <strong>Desenvolvedor Python</strong>.
            Desenvolvi APIs com Flask e Django para transformação digital de grandes empresas.
            Integrei plataformas como Pipefy e CRMs via Webhooks e GraphQL, automatizando fluxos com ganhos de até 35% em eficiência.
            Gerenciei infraestrutura em GCP e pipelines CI/CD com GitHub Actions, reduzindo o tempo de entrega em 60%.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2020-2022</BioYear>
            Trabalhei na <strong>Prefeitura de Itu</strong> como <strong>Tecnólogo em Gestão de TI</strong>.
            Gerenciei infraestrutura e segurança cibernética com VMware, SOC/SIEM e políticas de conformidade.
            Reduzi o tempo de resposta a incidentes em mais de 60% com soluções de monitoramento.
            Atuei com times multidisciplinares para simplificar a infraestrutura e garantir a continuidade operacional.
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
