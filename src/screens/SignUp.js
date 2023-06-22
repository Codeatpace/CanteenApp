import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [credentials, setcredentials] = useState({name:"", email:"", password:""
  });
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password}))
      const response = await fetch('http://localhost:5000/api/createuser', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
      });
      const json = await response.json();
      console.log(json)                            
      if(!json.success){
        alert("Enter valid credentias")
      }
    }
    const onChange = (e) => {
      setcredentials({...credentials, [e.target.name]:e.target.value})
    }
    return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to={"/login"} className="m-3 btn btn-warning">Already a User?</Link>
      </form>
      </div>
    </>
  );
}
