import { useContext,createContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    changeAuthenticated: undefined,
    idUsuario: null,
    setId: undefined,
    name: "",
    getName: undefined
})

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [idUsuario,setIdUsuario] = useState(null)
    const [name, setName] = useState("")
    const changeAuthenticated = (value) => {setIsAuthenticated(value)}
    const setId = (id) => {setIdUsuario(id)}
    const getName = (name) => setName(name)
    return (
        <AuthContext.Provider value={{isAuthenticated, changeAuthenticated, idUsuario,setId,name, getName}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)