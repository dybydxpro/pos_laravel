import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function StockFetch(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchStock() 
    },[])

    const fetchStock = async () => {
        await Services.getAllStock().then(({data})=>{
            setData(data)
        })
    }

    function handle(e){
        var search = e.target.value
        if(search == ""){
            Services.getAllStock().then(({data})=>{
                setData(data)
            })
        }
        else{
            Services.searchStockByName(search).then(({data})=>{
                setData(data);
            })
        }
    }

    return(
        <div className="justify-content-end">
            <div className="text-center my-3">
                <h2>List of Stock.</h2>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col col-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="search" placeholder="Search"/>
                        <label htmlFor="search" className="form-label">Search Stock by Item Name</label>
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
                            <th scope="col" width="100px">Unit</th>
                            <th scope="col" width="100px">Qty</th>
                            <th scope="col" width="150px">Holesale Price (Rs.)</th>
                            <th scope="col" width="150px">Holesale Retail Price (Rs.)</th>
                            <th scope="col" width="150px">Retail Price (Rs.)</th>
                            <th scope="col" width="100px">Creater ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.stockID}>
                                    <th scope="row" className="text-center">{datas.stockID}</th>
                                    <td>{datas.item}</td>
                                    <td className="text-center">{datas.unit}</td>
                                    <td className="text-end">{datas.qty.toFixed(2)}</td>
                                    <td className="text-end">{datas.holesale_price.toFixed(2)}</td>
                                    <td className="text-end">{datas.holesaleretail_price.toFixed(2)}</td>
                                    <td className="text-end">{datas.retail_price.toFixed(2)}</td>
                                    <td className="text-center">{datas.stockCreaterID}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StockFetch;