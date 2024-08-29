import React, { useEffect, useState } from 'react';
import LoaderComponent from "./LoaderComponent";

const HomeComponent = () => {
    const [datas,setData]  =  useState([]);
    const [loading,setLoading] = useState(true);
     useEffect(()=>{
        setLoading(true);
         fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
      .then(data =>{setData(data);setLoading(false)});
     },[])
    return (
        <div className='text-center'>
            <h3 className="text-primary">Users List</h3>
            {loading ? 
             <LoaderComponent />:
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>      
    </tr>
  </thead>
  <tbody>
  {
        datas.map((data) =>{
          return(<tr key={data.id}>
          <th scope="row">{data.id}</th>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address.city}</td>               
         </tr>) 
        })             
      }  
  </tbody>
</table>
}

        </div>
    );
};

export default HomeComponent;