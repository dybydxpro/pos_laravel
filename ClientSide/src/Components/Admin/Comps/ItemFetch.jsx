import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function ItemFetch(){
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
                <h2>List of Items.</h2>
            </div>
            <div className="container">
                <table className="table">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Creater ID</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.id}>
                                    <th scope="row">{datas.id}</th>
                                    <td>{datas.item}</td>
                                    <td>{datas.unit}</td>
                                    <td>{datas.createrID}</td>
                                    <td><Link to={`/admin/item/edit/${datas.id}`} className='btn btn-warning me-2'> Edit </Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemFetch;