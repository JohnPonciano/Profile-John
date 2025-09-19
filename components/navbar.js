import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'brand.100' : undefined}
      color={active ? 'brand.800' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(10, 10, 10, 0.8)')}
      css={{ backdropFilter: 'blur(20px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Projetos
          </LinkItem>
          <LinkItem href="https://relevance.substack.com" path={path} target="_blank">
            Blog
          </LinkItem>
          <LinkItem href="https://www.linkedin.com/in/jonathan-ponciano-silva/" path={path} target="_blank">
            LinkedIn
          </LinkItem>
          
        </Stack>

        <Box flex={1} align="right">
          <Stack direction="row" spacing={2} align="center">
            <Link
              href="https://www.linkedin.com/in/jonathan-ponciano-silva/"
              target="_blank"
              _hover={{ transform: 'scale(1.1)' }}
              transition="all 0.2s"
            >
            </Link>
            <ThemeToggleButton />
          </Stack>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Sobre
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Projetos
                </MenuItem>
                <MenuItem as={MenuLink} href="https://relevance.substack.com" target="_blank">
                  Blog
                </MenuItem>
                <MenuItem as={MenuLink} href="https://www.linkedin.com/in/jonathan-ponciano-silva/" target="_blank">
                  LinkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
