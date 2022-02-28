import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function GRNFetch(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchItem() 
    },[])

    const fetchItem = async () => {
        await Services.getAllItems().then(({data})=>{
            setData(data)
        })
    }

    return(
        <div className="justify-content-end">
            <div className="text-center my-3">
                <h2>List of Good Receiving Note.</h2>
            </div>
            <div className="container">
                <table className="table">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th scope="col">GRN #</th>
                            <th scope="col">GRN Date</th>
                            <th scope="col">Item Number</th>
                            <th scope="col">Stock ID</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Payment Type</th>
                            <th scope="col">Due date</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.id}>
                                    <th scope="row">{datas.id}</th>
                                    <th>{datas.grnDate}</th>
                                    <th>{datas.itemNo}</th>
                                    <th>{datas.stockNo}</th>
                                    <th>{datas.item}</th>
                                    <th>{datas.qty}</th>
                                    <th>{datas.paymentType}</th>
                                    <th>{datas.dueDate}</th>
                                    <th><Link to={`/admin/grn/edit/${datas.id}`} className='btn btn-warning me-2'> Edit </Link></th>
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