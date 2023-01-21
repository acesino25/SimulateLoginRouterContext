import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useUserContext } from '../context/UserContext'

const Restricted = () => {

    const {user} = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            console.log('User is not defined, nor logged in')
            navigate('/');
        }
    },
    [user])

  return (
    <div>
        <NavBar />
        <Outlet></Outlet>
    </div>
  )
}

export default Restricted