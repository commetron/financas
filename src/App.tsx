import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './Pages/Transactions'


export function App() {
  const [count, setCount] = useState(0)

  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle></GlobalStyle>
     <Transactions/>
   </ThemeProvider>
  )
}


