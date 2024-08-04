import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '' })

  const updateUser = (userData) => {
    setUser(userData)
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

const user = { UserProvider, useUser}

export default user