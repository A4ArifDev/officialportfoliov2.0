import React from 'react'
import {useAuthContext} from '../../contexts/AuthContext';
import {Navigate, Outlet} from 'react-router-dom'
const ProtectedRoutes = () => {

const {token} = useAuthContext();
  return (
    token ? <Navigate to="/admin/dashboard"/> : <Outlet/>
  )
}

export default ProtectedRoutes