import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Create() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const navigate=useNavigate()

    const header ={'Access-Control-Allow-Origin':'*'}
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('clciked')
        axios.post('https://64ec6557f9b2b70f2bfa3ce6.mockapi.io/first-crud-react',{
         name:name,
         email:email,
         header,
        })

       .then(()=>{
        navigate('/read')
       })
    };
  return (
   <div className='container my-5'>
  <div className="fist d-flex justify-content-between">
  <h3>Create</h3>
  <Link to='/read'><button className='btn btn-outline-secondary'>Show Data</button></Link>
  </div>
  <form action="" className='my-4'>
  <div class="mb-3">
  <label class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e)=>{setName(e.target.value)}} placeholder='type name'/>
</div>
<div class="mb-3">
  <label  class="form-label">Email Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@example.com"/>
</div>
<button type="button" onClick={handleSubmit} class="btn btn-secondary">Submit</button>
  </form>
   </div>
  )
}

export default Create