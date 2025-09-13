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
  chakra,
  Badge,
  Flex,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import { IoLogoRss } from 'react-icons/io5'
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
             Sou desenvolvedor de software com <strong>pézinho em segurança da informação</strong>, com paixão por construir 
             soluções tecnológicas robustas, seguras e escaláveis. Tenho experiência em backend com 
             <strong>Python, Java, Go e Elixir</strong>, além de domínio em frameworks modernos como Django, FastAPI, 
             Spring Boot e arquitetura de microsserviços.
           </p>
           <p>
             Já atuei em projetos de alto impacto, desde integração com sistemas legados até a construção de APIs resilientes 
             e pipelines de CI/CD. Também tenho forte atuação em <strong>segurança ofensiva</strong> e análise de vulnerabilidades, 
             combinando teoria sólida com prática em ferramentas como Burp Suite, Nmap, Metasploit e Wireshark.
           </p>
           <p>
             Sou movido por desafios e estou sempre buscando crescer, tanto tecnicamente quanto como comunicador e líder. 
             Meu objetivo é evoluir constantemente para, um dia, liderar uma equipe que valorize colaboração, excelência técnica 
             e aprendizado contínuo. Nas horas vagas, gosto de cozinhar, jogar e transformar ideias criativas em projetos reais.
           </p>
         </BioSection>
         <br></br>
       </Section>

       <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          
          <BioSection>
            <BioYear>2025-Presente</BioYear>
            Trabalho como <strong>Freelancer</strong> na <strong>X UNSEEN</strong> como <strong>Back End Developer | DevOps | CyberSec</strong>.
            Consultoria e desenvolvimento para empresas de diferentes segmentos, unindo engenharia de software, 
            infraestrutura e segurança da informação. Projetos recentes incluem Recrutei (PHP/Laravel) e Kora Saúde (DevOps/CI/CD).
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2024-2025</BioYear>
            Trabalhei na <strong>Medens</strong> como <strong>System Analyst</strong>.
            Mantive e evoluí sistemas internos com Angular e PHP, otimizando a rotina comercial.
            Desenvolvi um chatbot interno que reduziu o tempo médio de resposta em <strong>40%</strong>.
            Criei uma IA de apoio técnico que reduziu em <strong>50%</strong> a curva de aprendizado das novas vendedoras.
            Implementei pipelines CI/CD com Docker e GitHub Actions, reduzindo o tempo de deploy em <strong>70%</strong>.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2022-2023</BioYear>
            Trabalhei na <strong>Accenture Brasil</strong> como <strong>Python Developer</strong>.
            Desenvolvi APIs robustas com Flask e Django para transformação digital de grandes empresas.
            Integrei plataformas como Pipefy e CRMs via Webhooks e GraphQL, automatizando fluxos com ganhos de até <strong>35%</strong> em eficiência.
            Gerenciei infraestrutura em GCP e pipelines CI/CD com GitHub Actions, reduzindo o tempo de entrega em <strong>60%</strong>.
          </BioSection>
          <br />
          
          <BioSection>
            <BioYear>2020-2022</BioYear>
            Trabalhei na <strong>Prefeitura de Itu</strong> como <strong>Tecnólogo em Gestão de TI</strong>.
            Gerenciei infraestrutura e segurança cibernética com VMware, SOC/SIEM e políticas de conformidade.
            Reduzi o tempo de resposta a incidentes em mais de <strong>60%</strong> com soluções de monitoramento.
            Atuei com times multidisciplinares para simplificar a infraestrutura e garantir a continuidade operacional.
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
            size="lg"
            mb={4}
          >
            Projetos
          </Button>
          <br />
          <Button
            as={Link}
            href="https://api.whatsapp.com/send?phone=5511988661865"
            target="_blank"
            leftIcon={<IoLogoWhatsapp />}
            colorScheme="green"
            variant="outline"
          >
            Disponível para conversar
          </Button>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Skills & Tecnologias
        </Heading>
        
        <SimpleGrid columns={[1, 2]} gap={6}>
          {/* Linguagens e Frameworks */}
          <Box>
            <Text fontWeight="bold" mb={3} color="teal.500">💻 Linguagens & Frameworks</Text>
            <Flex wrap="wrap" gap={2}>
              {['Python', 'Java', 'Go', 'Elixir', 'JavaScript', 'Node.js', 'PHP', 'Laravel', 'Django', 'FastAPI', 'Spring Boot'].map(skill => (
                <Badge key={skill} colorScheme="blue" variant="subtle">{skill}</Badge>
              ))}
            </Flex>
          </Box>

          {/* DevOps e Infraestrutura */}
          <Box>
            <Text fontWeight="bold" mb={3} color="teal.500">🚀 DevOps & Infraestrutura</Text>
            <Flex wrap="wrap" gap={2}>
              {['Docker', 'CI/CD', 'Jenkins', 'GitHub Actions', 'AWS', 'GCP', 'Kubernetes', 'Git', 'Grafana', 'Redis', 'RabbitMQ'].map(skill => (
                <Badge key={skill} colorScheme="orange" variant="subtle">{skill}</Badge>
              ))}
            </Flex>
          </Box>

          {/* CyberSec e Segurança */}
          <Box>
            <Text fontWeight="bold" mb={3} color="teal.500">🔒 CyberSec & Segurança</Text>
            <Flex wrap="wrap" gap={2}>
              {['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'SOC/SIEM', 'VMware', 'Hyper-V', 'Proxmox', 'Redes', 'TCP/IP'].map(skill => (
                <Badge key={skill} colorScheme="red" variant="subtle">{skill}</Badge>
              ))}
            </Flex>
          </Box>

          {/* IA e Soft Skills */}
          <Box>
            <Text fontWeight="bold" mb={3} color="teal.500">🤖 IA & Soft Skills</Text>
            <Flex wrap="wrap" gap={2}>
              {['Machine Learning', 'Chatbots', 'Automação', 'Liderança Técnica', 'Trabalho em Equipe', 'Comunicação', 'Resolução de Problemas'].map(skill => (
                <Badge key={skill} colorScheme="purple" variant="subtle">{skill}</Badge>
              ))}
            </Flex>
          </Box>
        </SimpleGrid>
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
          <ListItem>
            <Link href="https://relevance.substack.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoRss />}
              >
                Blog & Artigos
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
