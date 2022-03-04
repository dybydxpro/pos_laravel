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

    function handle(e){
        var search = e.target.value
        if(search == ""){
            Services.getAllUser().then(({data})=>{
                setData(data)
            })
        }
        else{
            Services.searchUser(search).then(({data})=>{
                setData(data);
            })
        }
    }

    return(
        <div className="justify-content-end">
            <br />
            <div className="text-center my-3">
                <h2>List of Users.</h2>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col col-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onChange={(e) => handle(e)} id="search" placeholder="Search"/>
                        <label htmlFor="search" className="form-label">Search by Name</label>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="table">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th scope="col" width="100px">#</th>
                            <th scope="col">Name</th>
                            <th scope="col" width="150px">User Name</th>
                            <th scope="col" width="150px">Type</th>
                            <th scope="col" width="300px">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr key={datas.id}>
                                    <th scope="row" className="text-center">{datas.id}</th>
                                    <td>{datas.name}</td>
                                    <td className="text-center">{datas.userName}</td>
                                    <td className="text-center">{datas.type}</td>
                                    <td className="text-center">
                                        <Link to={`/admin/user/edit/${datas.id}`} className='btn btn-warning me-2'><i className="bi bi-pencil-square"></i> &nbsp; Edit </Link>
                                        &nbsp;
                                        <Link to={`/admin/user/resetpassword/${datas.id}`} className='btn btn-warning me-2'><i className="bi bi-arrow-repeat"></i> &nbsp; Reset Password </Link>
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