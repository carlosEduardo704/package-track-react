import React from "react";
import './ErrorStyle.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  

  return(
    <>
    <NavBar/>
    <div className="divError">
      <h1>Erro 404!</h1>
      <h2>Pagina não Encontrada!</h2>
    </div>
    <div className="divFooter">

    <Footer/>
    </div>
    </>
  )
}

export default ErrorPage