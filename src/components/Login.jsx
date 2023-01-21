import React from 'react'
import { useUserContext } from '../context/UserContext'
import users from '../data/users';

const Login = () => {

    const {setUser} = useUserContext();

    const handleClick = () =>{
        setUser(users);
    }
  return (
    <div>
        <button onClick={handleClick}> Log me in </button>
    </div>
  )
}

export default Login