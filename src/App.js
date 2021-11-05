import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { Routes, Route } from 'react-router-dom'
import ButtonAppBar from './Header'
import Home from './Home'
import About from './About'
import Login from './Login'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
