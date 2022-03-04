import React, { useEffect, useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate, useParams } from 'react-router-dom';

function UserResetPassword(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({ });

    useEffect(()=>{
        Services.userGetByID(id)
        .then(({data})=>{
          console.log(data);
          setData(data);
        }).catch(({response})=>{
          console.log(response);
        })
    },[])

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const updateUser = async (e) => {
        e.preventDefault();
        if(data.password == data.confirmPassword){
            await Services.resetPassword(data)
            .then(({data})=>{
            console.log(data);
            navigate("/admin/user");
            }).catch(({response})=>{
            console.log(response);
            })
        }
        else{
            console.log("Password is wrong!");
        }
        
    }

    return(
        <div className="container">
            <div className="detailBox shadow bg-body rounded">
                <h1 className='h1 d-flex justify-content-center'>Reset Password</h1>
                <br/>
                <form onSubmit={(e) => updateUser(e)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="id" value={ data.id } onChange={(e) => handle(e)} placeholder="ID" disabled/>
                        <label htmlFor="id" className="form-label">User ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="userName" value={ data.userName } onChange={(e) => handle(e)} placeholder="Name" disabled/>
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
                    <button type="submit" className="btn btn-primary"><i className="bi bi-download"></i> &nbsp;Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UserResetPassword;