import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Update = () => {

    const [id,setId]=useState()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const navigate=useNavigate()
   useEffect(()=>{

       setId(localStorage.getItem('id'))
       setName(localStorage.getItem('name'))
       setEmail(localStorage.getItem('email'))
   },[])
   

   const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put(`https://64ec6557f9b2b70f2bfa3ce6.mockapi.io/first-crud-react/${id}`,{
        name:name,
        email:email,
    })
    .then(()=>{
        navigate('/read')
    })
   }
  return (
    <div className="container my-3">
      <h3>Update</h3>
      <form action="" className="my-4">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="type name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email Address</label>
          <input
            type="email"
            class="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="name@example.com"
          />
        </div>
        <div className="">
        <button type="button" onClick={handleUpdate} class="btn btn-secondary">
         update
        </button>
       <Link to='/read'><button className='btn btn-outline-secondary mx-3'>Back</button></Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
