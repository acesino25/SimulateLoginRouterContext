import React from 'react'
import Login from '../components/Login'
import { useUserContext } from '../context/UserContext'

const LoginPage = () => {

  const {user} = useUserContext()

  return (
    <div>
        <h1>Hey there! I'm the Login Page</h1>
        {!user && <Login></Login>}
    </div>
  )
}

export default LoginPage