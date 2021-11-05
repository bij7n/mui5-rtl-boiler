import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors'
import './assets/fonts/fonts.css'

let theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      'IRANYekan',
      'IRANSans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
theme = responsiveFontSizes(theme)

export default theme
