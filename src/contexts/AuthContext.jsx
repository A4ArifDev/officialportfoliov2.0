import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext({
    user:null,
    token:null,
    notification:null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {}
});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');
    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    const setNotification = (message) => {
        _setNotification(message);
        setTimeout(()=>{
            _setNotification('');
        },5000)
    }
    return(
       <AuthContext.Provider value={{user, setUser, token, setToken, notification, setNotification}}>
            {children}
       </AuthContext.Provider>
    )
}
 export const useAuthContext = () =>  useContext(AuthContext);
