import React, { useEffect, useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit(){
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
        await Services.updateUser(data)
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
                <h1 className='h1 d-flex justify-content-center'>Edit user details.</h1>
                <br/>
                <form onSubmit={(e) => updateUser(e)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="id" value={ data.id } onChange={(e) => handle(e)} placeholder="ID" disabled/>
                        <label htmlFor="id" className="form-label">User ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" value={ data.name } onChange={(e) => handle(e)} placeholder="Name" required/>
                        <label htmlFor="name" className="form-label">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="userName" value={ data.userName } onChange={(e) => handle(e)} placeholder="User Name" required/>
                        <label htmlFor="userName" className="form-label">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select form-select" id="type" value={ data.type } onChange={(e) => handle(e)}  aria-label=".form-select-sm example">
                            <option value="Cashier">Cashier</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <label htmlFor="type" className="form-label">Type</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select form-select" id="status" value={ data.status } onChange={(e) => handle(e)}  aria-label=".form-select-sm example">
                            <option value="Active">Active</option>
                            <option value="Deactive">Deactive</option>
                        </select>
                        <label htmlFor="status" className="form-label">Status</label>
                    </div>
                    <button type="submit" className="btn btn-primary"><i className="bi bi-download"></i> &nbsp;Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UserEdit;