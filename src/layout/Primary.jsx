import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Primary = () => {

    const style ={
        display: 'flex',
        justifyContent: 'center'
    }

  return (
    <div>
        <NavBar />
        <div style={style}>
            <Outlet></Outlet>
        </div>
        
    </div>
  )
}

export default Primary