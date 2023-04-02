import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const {state} = useLocation()
    
    const obj = {
        

    }
  
    
    if (state != null) {
        localStorage.setItem("User", JSON.stringify(state) )  
    }

    console.log(state)
   
  return (
    <>


    <header>
    <Link to="home" id='Learn-war'> Learn War</Link>
    
        {
            state?.logged  ? (
                
                <div className="user">
            <span className="username">{state?.name}</span>
            <button className="btn"> <Link to= "home">Cerrar secion</Link></button>
                </div>
            ) : (
                <nav>
                <Link to="/login"> Inicia secion</Link>  
            </nav>
            )}
            <Link to="register"> Registrate</Link>

    </header>
       
    

        <Outlet/>
    </>    
  )


}
