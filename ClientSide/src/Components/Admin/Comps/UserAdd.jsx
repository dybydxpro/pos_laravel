import React, { useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate } from 'react-router-dom';

function UserAdd(){
    const navigate = useNavigate();
    const [data, setData] = useState({ });

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const addUser = async(e) => {
        e.preventDefault();
        await Services.createNewUser(data)
        .then(({data})=>{
          console.log(data);
          navigate("/admin/user");
        }).catch(({response})=>{
          console.log(response);
        })
    }
        
    return(
        <div className="container">
            <div className="detailBox shadow bg-body rounded">
                <form onSubmit={ (e)=>addUser(e) }>
                    <h1 className='h1 d-flex justify-content-center'>Add New User.</h1>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" value={ data.name } onChange={(e) => handle(e)} placeholder="Name" required/>
                        <label htmlFor="name" className="form-label">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="userName" value={ data.userName } onChange={(e) => handle(e)} placeholder="User Name" required/>
                        <label htmlFor="userName" className="form-label">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" onChange={(e) => handle(e)} placeholder="Password" value={data.password} required/>
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="confirmPassword" onChange={(e) => handle(e)} placeholder="Confirm Password" value={data.confirmPassword} required/>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select form-select" id="type" value={ data.type } onChange={(e) => handle(e)}  aria-label=".form-select-sm example">
                            <option value="">Select one</option>
                            <option value="Cashier">Cashier</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <label htmlFor="type" className="form-label">Type</label>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default UserAdd;