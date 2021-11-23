import React from 'react'
import 'bootstrap'
import carImg1 from '../img/carrousel-1.jpg'
import carImg2 from '../img/carrousel-2.jpg'
import carImg3 from '../img/carrousel-3.jpg'


const Carrousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carImg1} class="d-block w-100" height="400px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carImg2} class="d-block w-100" height="400px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carImg3} class="d-block w-100" height="400px" alt="..."/>
    </div>
  </div>
</div>
    )
}

export default Carrousel
