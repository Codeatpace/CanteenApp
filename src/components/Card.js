import React from "react";
import { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  //const priceRef = useRef(); //useRef() is a hook
  const [qty, setQty] = useState(1);
  const handleAddToCart = async() => {

    await dispatch({type: "ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, img:props.foodItem.img});
    console.log(data);
 
  }
  let finalPrice = qty * props.foodItem.price;
  return (
    <div>
      <div>
        <div
          className="card m-4"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:150, width:285}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-warning rounded" onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100">₹{finalPrice}/- </div>
            </div>
            <hr>
            </hr>
            
              <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
      </div>
  );
}

