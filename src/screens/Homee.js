import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Homee() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async ()=>{
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      }
    })
    response = await response.json()
    setFoodCat(response[1]);
    setFoodItem(response[0]);
    //console.log(response[0], response[1]);
  }

  useEffect(() => {
    loadData()
  },[])

  return (
    <div>
        <div><Navbar/></div>
        <div>  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex:5}}>
    <form className="d-flex justify-content-center">
    <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {setSearch(e.target.value)}}/>
     {/* <button className="btn bg-warning my-2 my-sm-0 d-inline" type="submit">Search</button> */}</form>
      </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300*700/?pizza" style={{filter: "brightness{30%}"}} height={700} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300*700/?sandwich" style={{filter: "brightness{30%}"}} height={700} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300*700/?friedrice" style={{filter: "brightness{30%}"}} height={700} className="d-block w-100" alt="..."/>
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
        <div className='container'>
          {
            foodCat !== [] ?
            foodCat.map((data) => {
              return (<div className='row mb-3'> <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
                </div>
                <hr/>
                {foodItem !== [] ?
                foodItem.filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) .map(filterItems => {
                  return(
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'>
                      <Card foodItem = {filterItems}
                      ></Card>
                      </div>
                  )
                }):<div>No such Data found</div>}
                </div>)}):" "}
        </div>
        <div><Footer/></div>
    </div>
  )
  }
