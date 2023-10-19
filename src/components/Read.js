import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './read.css'

function Read() {
const [dataSave,setDataSave]=useState([])
const [tableDardk,setTableDark]=useState()

    function getData(){
    axios.get('https://64ec6557f9b2b70f2bfa3ce6.mockapi.io/first-crud-react')
    .then((res)=>{
        setDataSave(res.data)
    })
}

function handleDelete(id){
    axios.delete(`https://64ec6557f9b2b70f2bfa3ce6.mockapi.io/first-crud-react/${id}`)
    .then(()=>{
        getData()
    })
}
    useEffect(()=>{
        getData();
    
    },[])

    const setToLocalStorage=(id,name,email)=>{
     localStorage.setItem('id',id) 
     localStorage.setItem('name',name) 
     localStorage.setItem('email',email) 
    }


  return (
    <div className='container my-5'>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" onClick={()=>{
            
    if(tableDardk === 'table-dark') setTableDark('')
    else setTableDark('table-dark')
        }} />
        </div>
          <div className="fist d-flex justify-content-between my-5">
          <h3>Read Your Data</h3>
         <Link to='/'><button className='btn btn-outline-secondary'>Create</button></Link>
         </div>
         <table className={`table ${tableDardk}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
{ 

dataSave.map((eachData)=>{
return(

<tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>
<Link to='/update'>
<button className='btn btn-success' onClick={()=>{setToLocalStorage(eachData.id,eachData.name,eachData.email)}}>Edit</button>

</Link>
      </td>
      <td>
        <button className='btn btn-danger' onClick={()=>handleDelete(eachData.id)}>delete</button>
      </td>
    </tr>
  </tbody>
)
})
  }
</table>
    </div>
  )
}

export default Read