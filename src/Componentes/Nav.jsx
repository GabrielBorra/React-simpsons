import React from 'react'
import 'bootstrap'
import navImg from '../img/header-simpsons.gif'
const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand" href="/"><img src={navImg} alt="" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Inicio </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Contacto</a>
      </li>
      
      
    </ul>
    </div>
    <div >
    <form class="d-flex my-2 my-lg-0 me-5 ">
      <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Nav
