import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cardd from "../components/Cardd";

const Canteen = () => {
  const [allorderData, setallOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      let res = await fetch("http://localhost:5000/api/allOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
      }
      const data = await res.json();
      setallOrderData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        {allorderData !== []
          ? allorderData.map((data) => {
              return (
                data.allorderData !== [] 
                ? data.map((item) => {
                  return item.order_data.slice(0).reverse().map((itemm) => {
                    return itemm.map((arrayData) => {
                      return (
                        <div>
                          {arrayData.Order_date ? (
                            <div className="m-auto mt-5">
                              {(data = arrayData.Order_date)}
                              <hr/>
                            </div>
                          ): (
                            <div className="col-12 col-md-6 col-lg-3">
                            <div className="card mt-3"
                            style={{
                              width: "16rem", 
                              maxHeight: "360px"
                            }}>
                              <img
                              src={arrayData.img}
                              className="card-img-top"
                              alt="..."
                              style={{height:"120px", objectFit:"fill"}} />
                              <div className="card-body">
                              <h5 className="card-title">{arrayData.name}</h5>
                              <div className="container w-100 p-0" style={{height:"38px"}}>
                                <span className="m-1">{arrayData.qty}</span>
                                <span className="m-1">₹{arrayData.price}/-</span>
                              </div>
                              </div>
                            </div>
                            </div>
                          )}
                        </div>
                      )
                    })
                  })
                }) :""
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Canteen;
