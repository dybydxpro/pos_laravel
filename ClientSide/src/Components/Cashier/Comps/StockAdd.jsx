import React, { useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate } from 'react-router-dom';

function StockAdd(){
    const navigate = useNavigate();
    const [data, setData] = useState({ });
    const [temp, setTemp] = useState({
        'unit': "",
    });

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        newData["stockCreaterID"] = sessionStorage.getItem("userID");
        setData(newData);
        console.log(newData);
    }

    function fetch(e){
        const newTemp = {...temp};
        newTemp[e.target.id] = e.target.value;
        Services.getByID(e.target.value).then(({data})=>{ setTemp(data) });
        setTemp(newTemp);
        console.log(newTemp);
    }

    const addStock = async(e) => {
        e.preventDefault();
        await Services.createStock(data)
        .then(({data})=>{
          console.log(data);
          navigate("/cashier/stock");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container">
            <div className="detailBox shadow bg-body rounded">
                <h1 className='h1 d-flex justify-content-center'>Add New Stock.</h1>
                <br/>
                <form onSubmit={ (e)=>addStock(e) }>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="itemID" onChange={(e) => { handle(e); fetch(e) }} placeholder="Item ID" required/>
                        <label htmlFor="item">Item ID</label>
                    </div>
                    <div className="">
                        <p>Item name - <b>{temp.item}</b></p>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="qty" onChange={(e) => handle(e)} placeholder="Qty" required/>
                        <label htmlFor="unit">Qty {"("+ temp.unit +")"}</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="holesale_price" onChange={(e) => handle(e)} placeholder="Holesale Price" required/>
                        <label htmlFor="unit">Holesale Price (Rs.)</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="holesaleretail_price" onChange={(e) => handle(e)} placeholder="Holesale Retail Price" required/>
                        <label htmlFor="unit">Holesale Retail Price (Rs.)</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="retail_price" onChange={(e) => handle(e)} placeholder="Retail Price" required/>
                        <label htmlFor="unit">Retail Price (Rs.)</label>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-success'><i className="bi bi-download"></i> &nbsp;Save</button>
                </form>
            </div>
        </div>
    );
}

export default StockAdd;