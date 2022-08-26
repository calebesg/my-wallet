import { createContext, useContext, useState } from 'react'

import dark from '../styles/theme/dark'
import light from '../styles/theme/light'

interface ITheme {
  title: string

  colors: {
    primary: string
    secondary: string
    tertiary: string

    text: string
    black: string
    gray: string

    success: string
    info: string
    warning: string
  }
}

interface IThemeContext {
  toggleTheme: () => void
  theme: ITheme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

interface IThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const savedTheme = localStorage.getItem('@minha-carteira:theme')
    return savedTheme === 'dark' ? dark : light
  })

  const toggleTheme = () => {
    const updatedTheme = theme.title === 'dark' ? light : dark

    setTheme(updatedTheme)

    localStorage.setItem('@minha-carteira:theme', updatedTheme.title)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
