import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex:5}}>
    <form className=" my-2 my-lg-0">
    <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn bg-warning my-2 my-sm-0 d-inline" type="submit">Search</button></form>
      </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300*700/?pizza" style={{filter: "brightness{30%}"}} height={700} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300*700/?sandwich" style={{filter: "brightness{30%}"}} height={700} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300*700/?chaat" style={{filter: "brightness{30%}"}} height={700} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
    </div>
  )
}
