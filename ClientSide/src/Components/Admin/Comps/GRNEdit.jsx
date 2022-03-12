import React, { useEffect, useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate, useParams } from 'react-router-dom';

function GRNEdit(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({ });

    useEffect(()=>{
        Services.grnGetByID(id)
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

    const editGRN = async (e) => {
        e.preventDefault();
        await Services.editGRN(data)
        .then(({data})=>{
          console.log(data);
          navigate("/admin/grn");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    return(
        <div className="container">
            <div className="detailBoxXL shadow bg-body rounded">
                <h1 className='h1 d-flex justify-content-center'>Edit Good Receiving Note.</h1>
                <br/>
                <form onSubmit={ (e)=>editGRN(e) }>
                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="grnID" value={data.grnID} onChange={(e) => handle(e)} placeholder="GRN ID" disabled/>
                            <label htmlFor="grnID">&nbsp;&nbsp;GRN ID</label>
                        </div>
                    </div>
                    <div className="row row-cols-2">
                        <div className="form-floating mb-3 ">
                            <input type="date" className="form-control" id="grnDate" value={data.grnDate} onChange={(e) => handle(e)} placeholder="GRN Date" required/>
                            <label htmlFor="grnDate">&nbsp;&nbsp;GRN Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="date" className="form-control" id="invoiceDate" value={data.invoiceDate} onChange={(e) => handle(e)} placeholder="Invoice Date" required/>
                            <label htmlFor="invoiceDate">&nbsp;&nbsp;Invoice Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="invoiceNo" value={data.invoiceNo} onChange={(e) => handle(e)} placeholder="Invoice Number" required/>
                            <label htmlFor="invoiceNo">&nbsp;&nbsp;Invoice Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="supplier" value={data.supplier} onChange={(e) => handle(e)} placeholder="Supplier" required/>
                            <label htmlFor="supplier">&nbsp;&nbsp;Supplier</label>
                        </div>
                    </div>

                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="itemID" value={data.itemID} onChange={(e) => handle(e)} placeholder="Item ID" required disabled/>
                            <label htmlFor="itemID">&nbsp;&nbsp;Item ID</label>
                        </div>
                    </div>
                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="stockID" value={data.stockID} onChange={(e) => handle(e)} placeholder="Stock ID" required disabled/>
                            <label htmlFor="stockID">&nbsp;&nbsp;Stock ID</label>
                        </div>
                    </div>
                    <div className="row row-cols-3">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" id="grnQty" value={data.grnQty} onChange={(e) => handle(e)} placeholder="QTY of Item" required/>
                            <label htmlFor="grnQty">&nbsp;&nbsp;QTY of Item</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <select className="form-select form-select mb-3" id="payType" value={data.payType} onChange={(e) => handle(e)} required>
                                <option value=""></option>
                                <option value="Cash">Cash</option>
                                <option value="Credit">Credit</option>
                                <option value="Cheque">Cheque</option>
                            </select>
                            <label htmlFor="payType">&nbsp;&nbsp;Pay Type</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="number" className="form-control" id="bulckPrice" value={data.bulckPrice} onChange={(e) => handle(e)} placeholder="Bulck Price" required/>
                            <label htmlFor="bulckPrice">&nbsp;&nbsp;Bulck Price</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="number" className="form-control" id="actualBulkPrice" value={data.actualBulkPrice} onChange={(e) => handle(e)} placeholder="Actual Bulk Price" required/>
                            <label htmlFor="actualBulkPrice">&nbsp;&nbsp;Actual Bulk Price</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="date" className="form-control" id="dueDate" value={data.dueDate} onChange={(e) => handle(e)} placeholder="Due Date"/>
                            <label htmlFor="dueDate">&nbsp;&nbsp;Due Date</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <textarea className="form-control" id="remarks" value={data.remarks} onChange={(e) => handle(e)} rows="3"></textarea>
                            <label htmlFor="remarks">&nbsp;&nbsp;Remarks</label>
                        </div>
                    </div>

                    <br/>
                    <button type='submit' className='btn btn-primary'><i className="bi bi-download"></i> &nbsp;Save</button>
                </form>
            </div>
        </div>
    );
}

export default GRNEdit;