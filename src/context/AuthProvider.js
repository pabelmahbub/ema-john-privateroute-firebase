import React from 'react'
import { createContext } from 'react'
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

function AuthProvider({children}) {
    //const {children}=props

    const allContexts=useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;