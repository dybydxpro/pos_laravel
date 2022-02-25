import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Services from "../../../Services";

function UserFetch(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchEmployee() 
    },[])

    const fetchEmployee = async () => {
        await Services.getAllUser().then(({data})=>{
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
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Type</th>
                            <th scope="col" width="300px">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.id}>
                                    <th scope="row">{datas.id}</th>
                                    <td>{datas.name}</td>
                                    <td>{datas.userName}</td>
                                    <td>{datas.type}</td>
                                    <td>
                                        <Link to={`/admin/user/edit/${datas.id}`} className='btn btn-warning me-2'> Edit </Link>
                                        &nbsp;
                                        <Link to={`/admin/user/resetpassword/${datas.id}`} className='btn btn-warning me-2'> Reset Password </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserFetch;