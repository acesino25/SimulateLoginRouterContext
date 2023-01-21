import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { colors } from '../theme/colors'

const NavBar = () => {


    const {user, setUser} = useUserContext();

    const handleClick = () =>{
        setUser('')
    }
    

    const styles = {
        backgroundColor: colors.secondary, 
        height: '48px', 
        display: 'flex', alignItems:'center',
        fontFamily: 'Arial',
        gap: '4px',
        padding: '.4rem',
        justifyContent: 'space-between'
    }

    const textStyles = {
        textDecoration: 'none',
        color: colors.dark,
    }

    console.log(user)
  return (
    <div>
        <nav style={styles}>
            <div style={{display: 'flex', gap: '0.2rem'}}>
            <NavLink style={textStyles} to='/'>Inicio</NavLink>
            {user && <NavLink style={textStyles} to='/dashboard'>Dashboard</NavLink>}
            </div>
            { 
                !user ? <NavLink style={textStyles} to='/login'>Login</NavLink>: 
                <button onClick={handleClick}>Log Out</button>
            }
            
        </nav>
    </div>
  )
}

export default NavBar