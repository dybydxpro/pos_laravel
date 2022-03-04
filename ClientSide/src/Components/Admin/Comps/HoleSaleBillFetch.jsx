import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function HoleSaleBillFetch(){
    const [data, setData] = useState([])

    useEffect(()=>{
        Services.fetchAllHSBillItems().then(({data})=>{
            setData(data)
        }) 
    },[])

    function handle(e){
        var search = e.target.value
        if(search == ""){
            Services.fetchAllHSBillItems().then(({data})=>{
                setData(data)
            })
        }
        else{
            Services.fetchAllHSBillItemsByBillID(search).then(({data})=>{
                setData(data);
            })
        }
    }

    return(
        <div className="justify-content-end">
            <div className="text-center my-3">
                <h2>List of Holesale Bill.</h2>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col col-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="search" placeholder="Search"/>
                        <label htmlFor="search" className="form-label">Search by Bill ID</label>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="table">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th scope="col" width="100px">#</th>
                            <th scope="col">Item Name</th>
                            <th scope="col" width="150px">Unit</th>
                            <th scope="col" width="150px">Creater ID</th>
                            <th scope="col" width="150px">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.itemID}>
                                    <th className="text-center" scope="row">{datas.itemID}</th>
                                    <td>{datas.item}</td>
                                    <td className="text-center">{datas.unit}</td>
                                    <td className="text-center">{datas.createrID}</td>
                                    <td className="text-center"><Link to={`/admin/item/edit/${datas.itemID}`} className='btn btn-warning me-2'><i className="bi bi-pencil-square"></i> &nbsp; Edit </Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HoleSaleBillFetch;