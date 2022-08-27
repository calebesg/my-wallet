import { createContext, useContext, useState } from 'react'

interface IAuthContext {
  logged: boolean
  signIn: (email: string, password: string) => void
  signOut: () => void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

interface IAuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    return !!localStorage.getItem('@minha-carteira:logged')
  })

  const signIn = (email: string, password: string) => {
    if (!email || !password) return

    localStorage.setItem('@minha-carteira:logged', 'logged')
    setLogged(true)
  }

  const signOut = () => {
    localStorage.removeItem('@minha-carteira:logged')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
