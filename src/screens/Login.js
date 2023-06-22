import React, {useState} from 'react'
import { Link , useNavigate} from "react-router-dom";

export default function Login() {
  const [credentials, setcredentials] = useState({email:"", password:""
  });
  let navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})
    });
    const json = await response.json();
    console.log(json);
    if(!json.success){
      alert("Enter valid credentilas")
    }
    if(json.success){
      localStorage.setItem("userEmail", credentials.email)
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate('/')
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
        <Link to={"/SignUp"} className="m-3 btn btn-warning">New User?</Link>
      </form>
      </div>
    </>
  )
}
