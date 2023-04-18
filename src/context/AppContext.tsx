import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

import { collection } from 'firebase/firestore'
import { FIRESTORE_DB } from '../services/firebase'

const AppContext = createContext({})

export function AppProvider({ children }: any) {
    const [user,setUser] = useState()

    const usersColletion = collection(FIRESTORE_DB, 'users')

    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
