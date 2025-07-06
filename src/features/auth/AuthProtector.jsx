import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

function AuthProtector({children}) {
  const {user,loading} = useAuth();
//   console.log(user);
  if(loading) return <h2>Loading...</h2> ;

  if(!user){
    // console.log("user not found");
    return  <Navigate to="/auth/signin"/>
  }
  return children ;
}

export default AuthProtector