import NextLink from 'next/link'
import { useState } from 'react'
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
  Text,
  VStack,
  HStack,
  Icon,
  Center,
  Grid,
  GridItem
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
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

const Home = () => {
  const [selectedExperience, setSelectedExperience] = useState('xunseen')

  return (
    <Layout>
      <Container maxW="4xl">
      {/* Hero Section */}
      <Center minH="80vh" flexDirection="column" textAlign="center">
        <VStack spacing={6} mb={8}>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
            Oi! meu nome é
          </Text>
          <Heading 
            as="h1" 
            fontSize={{ base: '4xl', md: '6xl' }} 
            fontWeight="bold"
            bgGradient="linear(to-r, #ff6b6b, #4ecdc4, #45b7d1)"
            bgClip="text"
          >
            Jonathan Ponciano
          </Heading>
          <Text fontSize="xl" color={useColorModeValue('gray.700', 'gray.300')} maxW="2xl">
            Um Engenheiro de Software ajudando pessoas na internet.
            <br />
            <Text as="span" color="teal.500" fontWeight="medium">
              Pessoas são o propósito e paixão é o combustível.
            </Text> ❤️‍🔥
          </Text>
        </VStack>

        

        {/* Contact Button */}
        <Button
          as={Link}
          href="mailto:jonathan.ponciano@icloud.com"
          size="lg"
          colorScheme="teal"
          leftIcon={<EmailIcon />}
          borderRadius="full"
          px={8}
          py={6}
          fontSize="lg"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'xl'
          }}
          transition="all 0.2s"
        >
          Me envie um e-mail!
        </Button>
      </Center>

      <Section delay={0.1}>
        <Analytics />
        <Heading as="h3" variant="section-title">
          # Sobre mim:
        </Heading>

        <VStack spacing={4} align="start" fontSize="lg">
          <Text>
            Tenho <strong>5 anos de experiência</strong> como <strong>Engenheiro de Software</strong>, trabalhando para empresas de diferentes segmentos.
          </Text>
          <Text>
            Sou otimista e busco viver a vida aproveitando a jornada.
          </Text>
          <Text>
            Nascido e crescido em <strong>Itu-SP</strong>, sou apaixonado por tecnologia e segurança da informação!.
          </Text>
        </VStack>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <Box mt={8}>
          {/* Lista de Empresas */}
          <VStack spacing={4} align="stretch" mb={8}>
          
            <Box
            
              p={3}
              borderRadius="lg"
              bg={selectedExperience === 'xunseen' ? useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') : 'transparent'}
              css={{ backdropFilter: selectedExperience === 'xunseen' ? 'blur(10px)' : 'none' }}
              border="1px solid"
              borderColor={selectedExperience === 'xunseen' ? 'green.300' : 'green.200'}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                borderColor: 'green.400',
                bg: useColorModeValue('green.50', 'green.900')
              }}
              onClick={() => setSelectedExperience('xunseen')}
            >
              <BioSection>
                <BioYear color="green">2025-Presente</BioYear>Trabalho como <strong>Freelancer</strong> na <strong>X UNSEEN</strong> como <strong>Back End Developer | DevOps | CyberSec</strong>.
                
              </BioSection>
             
            </Box>

            <Box
              p={3}
              borderRadius="lg"
              bg={selectedExperience === 'medens' ? useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') : 'transparent'}
              css={{ backdropFilter: selectedExperience === 'medens' ? 'blur(10px)' : 'none' }}
              border="1px solid"
              borderColor={selectedExperience === 'medens' ? 'teal.300' : 'teal.200'}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                borderColor: 'teal.400',
                bg: useColorModeValue('teal.50', 'teal.900')
              }}
              onClick={() => setSelectedExperience('medens')}
            >
              <BioSection>
                <BioYear>2024-2025</BioYear>
                Trabalhei na <strong>Medens</strong> como <strong>System Analyst</strong>.
              </BioSection>
            </Box>

            <Box
              p={3}
              borderRadius="lg"
              bg={selectedExperience === 'accenture' ? useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') : 'transparent'}
              css={{ backdropFilter: selectedExperience === 'accenture' ? 'blur(10px)' : 'none' }}
              border="1px solid"
              borderColor={selectedExperience === 'accenture' ? 'teal.300' : 'teal.200'}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                borderColor: 'teal.400',
                bg: useColorModeValue('teal.50', 'teal.900')
              }}
              onClick={() => setSelectedExperience('accenture')}
            >
              <BioSection>
                <BioYear>2022-2023</BioYear>
                Trabalhei na <strong>Accenture Brasil</strong> como <strong>Python Developer</strong>.
              </BioSection>
            </Box>

            <Box
              p={3}
              borderRadius="lg"
              bg={selectedExperience === 'prefeitura' ? useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') : 'transparent'}
              css={{ backdropFilter: selectedExperience === 'prefeitura' ? 'blur(10px)' : 'none' }}
              border="1px solid"
              borderColor={selectedExperience === 'prefeitura' ? 'teal.300' : 'teal.200'}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                borderColor: 'teal.400',
                bg: useColorModeValue('teal.50', 'teal.900')
              }}
              onClick={() => setSelectedExperience('prefeitura')}
            >
              <BioSection>
                <BioYear>2020-2022</BioYear>
                Trabalhei na <strong>Prefeitura de Itu</strong> como <strong>Tecnólogo em Gestão de TI</strong>.
              </BioSection>
            </Box>
          </VStack>

          {/* Detalhes da Experiência Selecionada */}
          <Box
            p={4}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            borderRadius="lg"
            css={{ backdropFilter: 'blur(10px)' }}
            border="1px solid"
            borderColor={useColorModeValue('whiteAlpha.200', 'whiteAlpha.100')}
          >
            {selectedExperience === 'xunseen' && (
              <Box>
                <Heading as="h4" fontSize="lg" mb={4} color="teal.600">
                  Software Engineer @ X UNSEEN
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
                  JAN 2025 - PRESENTE | Freelancer | Back End Developer | DevOps | CyberSec
                </Text>
                
                <Text fontSize="md" fontWeight="bold" mb={4} color="teal.500">
                  Empresas onde fui alocado:
                </Text>
                
                <VStack spacing={4} align="start">
                  <BioSection>
                    <BioYear>2025-Presente</BioYear>
                    <strong>Kora Saúde</strong> - DevOps Engineer
                    <br />
                    • Implementei pipeline CI/CD completo com GitHub Actions e Docker
                    <br />
                    • Configurei monitoramento com Grafana e alertas automatizados
                    <br />
                    • Otimizei infraestrutura AWS, reduzindo custos em 40%
                    <br />
                    • Automatizei deploys, reduzindo tempo de entrega de 2h para 15min
                  </BioSection>

                  <BioSection>
                    <BioYear>2025</BioYear>
                    <strong>Recrutei</strong> - Backend Developer
                    <br />
                    • Desenvolvi APIs REST com PHP/Laravel para sistema de recrutamento
                    <br />
                    • Integrei sistema de pagamentos com Stripe e webhooks
                    <br />
                    • Implementei sistema de notificações em tempo real
                    <br />
                    • Criei dashboard analítico com métricas de recrutamento
                  </BioSection>

                  <BioSection>
                    <BioYear>Variados</BioYear>
                    <strong>Consultoria CyberSec</strong> - Security Consultant
                    <br />
                    • Auditorias de segurança em sistemas web e APIs
                    <br />
                    • Análise de vulnerabilidades com Burp Suite e OWASP
                    <br />
                    • Implementação de políticas de segurança e compliance
                    <br />
                    • Treinamento de equipes em segurança da informação
                  </BioSection>
                </VStack>
              </Box>
            )}

            {selectedExperience === 'medens' && (
              <Box>
                <Heading as="h4" fontSize="lg" mb={4} color="teal.600">
                  System Analyst @ Medens
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
                  JAN 2024 - DEZ 2024 | System Analyst
                </Text>
                
                <VStack spacing={3} align="start">
                  <Text fontSize="sm">• Mantive e evolui sistemas internos com Angular e PHP</Text>
                  <Text fontSize="sm">• Desenvolvi chatbot interno que reduziu tempo de resposta em 40%</Text>
                  <Text fontSize="sm">• Criei IA de apoio técnico, reduzindo curva de aprendizado em 50%</Text>
                  <Text fontSize="sm">• Implementei pipelines CI/CD com Docker e GitHub Actions</Text>
                  <Text fontSize="sm">• Otimizei rotina comercial, aumentando produtividade em 35%</Text>
                  <Text fontSize="sm">• Reduzi tempo de deploy de 2 horas para 20 minutos</Text>
                </VStack>
              </Box>
            )}

            {selectedExperience === 'accenture' && (
              <Box>
                <Heading as="h4" fontSize="lg" mb={4} color="teal.600">
                  Python Developer @ Accenture Brasil
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
                  MAR 2022 - DEZ 2023 | Python Developer
                </Text>
                
                <VStack spacing={3} align="start">
                  <Text fontSize="sm">• Desenvolvi APIs robustas com Flask e Django para grandes empresas</Text>
                  <Text fontSize="sm">• Integrei plataformas como Pipefy e CRMs via Webhooks e GraphQL</Text>
                  <Text fontSize="sm">• Automatizei fluxos com ganhos de até 35% em eficiência</Text>
                  <Text fontSize="sm">• Gerenciei infraestrutura em GCP e pipelines CI/CD</Text>
                  <Text fontSize="sm">• Reduzi tempo de entrega em 60% com automação</Text>
                  <Text fontSize="sm">• Trabalhei em projetos de transformação digital</Text>
                </VStack>
              </Box>
            )}

            {selectedExperience === 'prefeitura' && (
              <Box>
                <Heading as="h4" fontSize="lg" mb={4} color="teal.600">
                  Tecnólogo em Gestão de TI @ Prefeitura de Itu
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
                  JAN 2020 - DEZ 2022 | Tecnólogo em Gestão de TI
                </Text>
                
                <VStack spacing={3} align="start">
                  <Text fontSize="sm">• Gerenciei infraestrutura e segurança cibernética</Text>
                  <Text fontSize="sm">• Trabalhei com VMware, SOC/SIEM e políticas de conformidade</Text>
                  <Text fontSize="sm">• Reduzi tempo de resposta a incidentes em mais de 60%</Text>
                  <Text fontSize="sm">• Implementei soluções de monitoramento avançadas</Text>
                  <Text fontSize="sm">• Atuei com times multidisciplinares</Text>
                  <Text fontSize="sm">• Garanti continuidade operacional dos sistemas</Text>
                </VStack>
              </Box>
            )}
          </Box>
        </Box>
      </Section>

      {/* Social Links */}
      <Section delay={0.3}>
        <Center>
          <HStack spacing={6}>
            <Link href="https://github.com/JohnPonciano/" target="_blank" _hover={{ transform: 'scale(1.1)' }} transition="all 0.2s">
              <Icon as={IoLogoGithub} boxSize={8} />
            </Link>
            <Link href="https://www.linkedin.com/in/jonathan-ponciano-silva/" target="_blank" _hover={{ transform: 'scale(1.1)' }} transition="all 0.2s">
              <Icon as={IoLogoLinkedin} boxSize={8} />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5511988661865" target="_blank" _hover={{ transform: 'scale(1.1)' }} transition="all 0.2s">
              <Icon as={IoLogoWhatsapp} boxSize={8} />
            </Link>
            <Link href="https://relevance.substack.com" target="_blank" _hover={{ transform: 'scale(1.1)' }} transition="all 0.2s">
              <Icon as={IoLogoRss} boxSize={8} />
            </Link>
          </HStack>
        </Center>
      </Section>

      {/* Footer */}
      <Box mt={20} textAlign="center" py={8} borderTop="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          Criado por <Text as="span" fontWeight="bold" color="teal.500">Jonathan Ponciano</Text> usando NextJS e Chakra UI.
        </Text>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mt={2}>
          © Todos os direitos reservados.
        </Text>
      </Box>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
