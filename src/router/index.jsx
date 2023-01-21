import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Primary from '../layout/Primary'
import Restricted from '../layout/Restricted'

import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Primary />,
        children:[
            {
                index: true,
                element: <Home />
            },{
                path: '/login',
                element: <LoginPage />,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Restricted />,
        children:[
            {
                index: true,
                element: <Dashboard />
            }
        ]
    }
])