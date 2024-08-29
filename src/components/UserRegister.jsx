import { useRef, useState } from "react";
import LoaderComponent from "./LoaderComponent";

const UserRegister = () => {
    const [messagedisplay,setSuccessMessageDisplay] = useState(false);
    const [loading,setLoading] = useState(false);
    const selectRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault();
    //Post API call - for user registeration
    setLoading(true);
   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      city: selectRef.current?.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
        setLoading(false);
        setSuccessMessageDisplay(true);
        setTimeout(()=>{
        setSuccessMessageDisplay(false);
    },3000);console.log(json)});

  }

  return (
    <div>
        <div className='text-center'>
          <h3 className="text-primary">Users List</h3>
          {
            messagedisplay ? 
        <div className='text-center'>
            <h4 className="text-primary">User registration has been successful</h4>
        </div> : null }    
        {loading ? <LoaderComponent />: null }  
        </div>  
       <form onSubmit={handleSubmit}>
        <div className="form-group">
           <label htmlFor="exampleFormControlInput1">User Name</label>
           <input type="text" ref={nameRef} className="form-control" id="exampleFormControlInput1" placeholder="User Name" required/>
        </div>
        <div className="form-group">
           <label htmlFor="exampleFormControlInput2">Email address</label>
           <input type="email" ref={emailRef} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" required/>
        </div>
        <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">City</label>
           <select ref={selectRef} className="form-control" id="exampleFormControlSelect1">
            <option>Gwenborough</option>
            <option>Wisokyburgh</option>
            <option>McKenziehaven</option>
            <option>South Elvis</option>
            </select>
        </div>
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
       </form>       
       </div>
  );
}

export default UserRegister;