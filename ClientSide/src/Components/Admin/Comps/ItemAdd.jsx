import React, { useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate } from 'react-router-dom';

function ItemAdd(){
    const navigate = useNavigate();
    const [data, setData] = useState({ });

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        newData["createrID"] = sessionStorage.getItem("userID");
        setData(newData);
        console.log(newData);
    }

    const addAddress = async(e) => {
        e.preventDefault();
        await Services.addItems(data)
        .then(({data})=>{
          console.log(data);
          navigate("/admin/item");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="justify-content-end">
            <br/>
            <div className="">
                <form onSubmit={ (e)=>addAddress(e) }>
                    <div className="detailBox shadow bg-body rounded">
                        <h1 className='h1 d-flex justify-content-center'>Add New Item.</h1>
                        <br/>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="item" onChange={(e) => handle(e)} placeholder="Add" required/>
                            <label htmlFor="item">Title</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="unit" onChange={(e) => handle(e)} placeholder="Address Line 2" required/>
                            <label htmlFor="unit">Unit</label>
                        </div>
                        <br/>
                        <div className="form-floating d-flex justify-content-end">
                            <button type='submit' className='btn btn-success'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ItemAdd;