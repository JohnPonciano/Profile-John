import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#0a0a0a')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 6
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#319795', '#4FD1C7')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}

const colors = {
  brand: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C7',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ 
  config, 
  styles, 
  components, 
  fonts, 
  colors,
  semanticTokens: {
    colors: {
      text: {
        default: 'gray.800',
        _dark: 'gray.100'
      }
    }
  }
})
export default theme
