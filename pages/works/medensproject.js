import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'

  const Work = () => (
    <Layout title="Medens Site">
      <Container>
        <Title>
          Medens <Badge>2024</Badge>
        </Title>
        <P>
        Meu projeto mais recente, o grande desafio foi criar uma inferce visual, que refletisse o novo respiro da marca.
        </P>
        <P>
            O site foi desenvolvido com Wordpress e Elementor, pois o prazo era extremamente curto e o cliente precisava
             de um site funcional e responsivo, e que facilitasse as pesquisas de materiais de apoio e produtos. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress,Elementor e PHP </span>
          </ListItem>
          <ListItem>
            <Meta>Site</Meta>
            <Link href="https://medens.com.br/" isExternal>
            Medens,
            Criando histórias que geram sorrisos. <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
          
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <WorkImage
          src="/images/works/newimg/medensproject.png"
          alt="medensprint"
        />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  