import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="InetChat-TCP">
      <Container>
        <Title>
        InetChat-TCP<Badge>2023</Badge>
        </Title>
        <P>
        Pequeno sistema de chat tcp, com suporte ao ngrok
        </P>
        <P>
          Você pode dar uma olhada nele no meu github junto com a documentação!
        </P>
        <List ml={4} my={4}>
          
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/JohnPonciano/InetChat-TCP">
              Documentação{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Sockets, Ngrok</span>
          </ListItem>
        </List>
        <WorkImage  src="/images/works/newimg/InetCHAT.png" alt="InetChat" />
        <WorkImage  src="/images/works/newimg/InetCHAT2.png" alt="InetChat" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  