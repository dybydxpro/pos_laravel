import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function GRNFetch(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchGRN() 
    },[])

    const fetchGRN = async () => {
        await Services.getAllGRN().then(({data})=>{
            setData(data);
        })
    }

    function handle(e){
        var search = e.target.value
        if(search == ""){
            Services.getAllGRN().then(({data})=>{
                setData(data)
            })
        }
        else{
            Services.searchGRN(search).then(({data})=>{
                setData(data);
            })
        }
    }

    return(
        <div className="justify-content-end">
            <br />
            <div className="text-center my-3">
                <h2>List of Good Receiving Note.</h2>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col col-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="search" placeholder="Search"/>
                        <label htmlFor="search" className="form-label">Search</label>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <table className="table">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th scope="col">GRN #</th>
                            <th scope="col">GRN Date</th> 
                            <th scope="col">Invoice #</th>
                            <th scope="col">Invoice Date</th>
                            <th scope="col">Supllier</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Stock ID</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Payment Type</th>
                            <th scope="col">Bulk price</th>
                            <th scope="col">Actual Price</th>
                            <th scope="col">Recorder ID</th>
                            <th scope="col">Due date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col" width="110px">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.grnID}>
                                    <th scope="row" className="text-center">{datas.grnID}</th>
                                    <th className="text-center">{datas.grnDate}</th>
                                    <th className="text-center">{datas.invoiceNo}</th>
                                    <th className="text-center">{datas.invoiceDate}</th>
                                    <th>{datas.supplier}</th>
                                    <th>{datas.item}</th>
                                    <th className="text-center">{datas.stockID}</th>
                                    <th className="text-end">{datas.holesale_price.toFixed(2)}</th>
                                    <th className="text-end">{datas.grnQty.toFixed(2)}</th>
                                    <th className="text-center">{datas.payType}</th>
                                    <th className="text-end">{datas.bulckPrice.toFixed(2)}</th>
                                    <th className="text-end">{datas.actualBulkPrice.toFixed(2)}</th>
                                    <th className="text-center">{datas.grnRecorderID}</th>
                                    <th className="text-center">{datas.dueDate}</th>
                                    <th>{datas.remarks}</th>
                                    <th><Link to={`/admin/grn/edit/${datas.grnID}`} className='btn btn-warning me-2'><i class="bi bi-pencil-square"></i> &nbsp; Edit </Link></th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GRNFetch;