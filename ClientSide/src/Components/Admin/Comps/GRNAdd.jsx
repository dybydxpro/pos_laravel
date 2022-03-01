import React, { useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate, /*Link*/ } from 'react-router-dom';

function GRNAdd(){
    const navigate = useNavigate();
    /*const [item, setItem] = useState({
        "id": 0,
        "item": 0,
        "unit": 0,
        "createrID": 0,
     });*/
    //const [stock, setStock] = useState({ });
    const [data, setData] = useState({ });
    var { searchForItem } = useState({});

    //Item table functions
    /*function itemHandle(e){
        searchForItem = e.target.value;
        console.log(searchForItem);
    }

    const fetchToTable = async(e) => {
        e.preventDefault();
        if(searchForItem != ""){
            Services.searchItemsByName(searchForItem)
            .then(({data})=>{
                setItem(data);
            console.log(data);
            }).catch(({response})=>{
            console.log(response);
            })
        }
        else{
            item.id = 0;
            item.item = " ";
            item.unit = " ";
            item.createrID = 0;
            setItem(item);
        }
    }*/

    //Form
    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        newData["grnRecorderID"] = sessionStorage.getItem("userID");
        setData(newData);
        console.log(newData);
    }

    const createGRN = async(e) => {
        e.preventDefault();
        await Services.createGRN(data)
        .then(({data})=>{
          console.log(data);
          navigate("/admin/grn");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container-fluid">
            <div className="detailBoxXL shadow bg-body rounded">
                <h1 className='h1 d-flex justify-content-center'>New Good Receiving Note.</h1>
                <br/>
                <form onSubmit={ (e)=>createGRN(e) }>
                    <div className="row row-cols-2">
                        <div className="form-floating mb-3 ">
                            <input type="date" className="form-control" id="grnDate" onChange={(e) => handle(e)} placeholder="GRN Date" required/>
                            <label htmlFor="grnDate">&nbsp;&nbsp;GRN Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="date" className="form-control" id="invoiceDate" onChange={(e) => handle(e)} placeholder="Invoice Date" required/>
                            <label htmlFor="invoiceDate">&nbsp;&nbsp;Invoice Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="invoiceNo" onChange={(e) => handle(e)} placeholder="Invoice Number" required/>
                            <label htmlFor="invoiceNo">&nbsp;&nbsp;Invoice Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="supplier" onChange={(e) => handle(e)} placeholder="Supplier" required/>
                            <label htmlFor="supplier">&nbsp;&nbsp;Supplier</label>
                        </div>
                    </div>
                    
                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="itemID" onChange={(e) => handle(e)} placeholder="Item ID" required/>
                            <label htmlFor="itemID">&nbsp;&nbsp;Item ID</label>
                        </div>
                    </div>
                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="stockID" onChange={(e) => handle(e)} placeholder="Stock ID" required/>
                            <label htmlFor="stockID">&nbsp;&nbsp;Stock ID</label>
                        </div>
                    </div>
                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="grnQty" onChange={(e) => handle(e)} placeholder="QTY of Item" required/>
                            <label htmlFor="grnQty">&nbsp;&nbsp;QTY of Item</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <select className="form-select form-select mb-3" id="payType" onChange={(e) => handle(e)} required>
                                <option value=""></option>
                                <option value="Cash">Cash</option>
                                <option value="Credit">Credit</option>
                                <option value="Cheque">Cheque</option>
                            </select>
                            <label htmlFor="payType">&nbsp;&nbsp;Pay Type</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="number" className="form-control" id="bulckPrice" onChange={(e) => handle(e)} placeholder="Bulck Price" required/>
                            <label htmlFor="bulckPrice">&nbsp;&nbsp;Bulck Price</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="number" className="form-control" id="actualBulkPrice" onChange={(e) => handle(e)} placeholder="Actual Bulk Price" required/>
                            <label htmlFor="actualBulkPrice">&nbsp;&nbsp;Actual Bulk Price</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="date" className="form-control" id="dueDate" onChange={(e) => handle(e)} placeholder="Due Date"/>
                            <label htmlFor="dueDate">&nbsp;&nbsp;Due Date</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <textarea className="form-control" id="remarks" rows="3"></textarea>
                            <label htmlFor="remarks">&nbsp;&nbsp;Remarks</label>
                        </div>
                    </div>

                    <br/>
                    <button type='submit' className='btn btn-success'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default GRNAdd;