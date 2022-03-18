import React from 'react'
import { Route } from 'react-router-dom';
import {Navigate } from 'react-router-dom'

export const Routes=({component,...options}) => {
    const isAuth = false;
    if (!isAuth) return (        
            <Route {...options} component={component} />        
        )
    return <Navigate replace={true} to="/"/>
}