import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function ItemFetch(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchEmployee() 
    },[])

    const fetchEmployee = async () => {
        await Services.getAll().then(({data})=>{
            setData(data)
        })
    }

    return(
        <div className="d-flex justify-content-end">
            <br/>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
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
                                <tr>
                                    <th scope="row">{datas.id}</th>
                                    <td>{datas.item}</td>
                                    <td>{datas.unit}</td>
                                    <td>{datas.createrID}</td>
                                    <td><Link to={`/item/edit/${datas.id}`} className='btn btn-warning me-2'> Edit </Link></td>
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