import React, { useEffect, useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate, useParams } from 'react-router-dom';

function ItemEdit(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({ });

    useEffect(()=>{
        Services.getByID(id)
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
        newData["createrID"] = sessionStorage.getItem("userID");
        setData(newData);
        console.log(newData);
    }

    const updateItem = async (e) => {
        e.preventDefault();
        await Services.editItems(data)
        .then(({data})=>{
          console.log(data);
          navigate("/admin/item");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container">
            <div className="detailBox shadow bg-body rounded">
                <h1 className='h1 d-flex justify-content-center'>Edit item details.</h1>
                <br/>
                <form onSubmit={(e) => updateItem(e)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="id" value={ data.id } onChange={(e) => handle(e)} placeholder="Name" disabled/>
                        <label htmlFor="id" className="form-label">ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="item" value={ data.item } onChange={(e) => handle(e)} placeholder="Name" required/>
                        <label htmlFor="item" className="form-label">Item</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="unit" value={ data.unit } onChange={(e) => handle(e)} placeholder="Type" required/>
                        <label htmlFor="unit" className="form-label">Unit</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ItemEdit;