import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cashier from "./../../../image/profile.png";

function Dashboard(){
    const navigate = useNavigate();
    let userName = sessionStorage.getItem("userName");
    let userType = sessionStorage.getItem("type");

    useEffect(()=>{
        if(userType != "Cashier"){
            navigate("/");
        }
    },[])



    return(
        <div className="position-fixed">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{width: "280px", height: "98vh"}}>
                <a href="/cashier" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                    <span className="fs-4">Cashier - {userName}</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#item-collapse" aria-expanded="true">
                            <i className="bi bi-chevron-right"></i> &nbsp; Items Manage
                        </button>
                        <div className="collapse" id="item-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/cashier/item/" className="btn text-white rounded"><i className="bi bi-card-list"></i> List of Items</a></li>
                                <li className="mx-4"><a href="/cashier/item/add/" className="btn text-white rounded"><i className="bi bi-file-earmark-plus"></i> &nbsp;Add new item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#stock-collapse" aria-expanded="true">
                        <i className="bi bi-chevron-right"></i> &nbsp; Stocks Manage
                        </button>
                        <div className="collapse" id="stock-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/cashier/stock/" className="btn text-white rounded"><i className="bi bi-card-list"></i> &nbsp; List of Stocks</a></li>
                                <li className="mx-4"><a href="/cashier/stock/add/" className="btn text-white rounded"><i className="bi bi-file-earmark-plus"></i> &nbsp;Add new Stocks</a></li>
                                <li className="mx-4"><a href="/cashier/grn" className="btn text-white rounded"><i className="bi bi-card-list"></i> &nbsp; List of Stocks GRN</a></li>
                                <li className="mx-4"><a href="/cashier/grn/add" className="btn text-white rounded"><i className="bi bi-file-earmark-plus"></i> &nbsp;Add new GRN</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#sales-collapse" aria-expanded="true">
                            <i className="bi bi-chevron-right"></i> &nbsp;Sales Point
                        </button>
                        <div className="collapse" id="sales-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/cashier/sale/" className="btn text-white rounded"><i className="bi bi-card-list"></i> &nbsp;List of Sale Details</a></li>
                                <li className="mx-4"><a href="/cashier/holesale/" className="btn text-white rounded"><i className="bi bi-card-list"></i> &nbsp;List of W.Sale Details</a></li>
                                <li className="mx-4"><a href="/cashier/sale/add/" className="btn text-white rounded"><i className="bi bi-file-earmark-plus"></i> &nbsp;New Bill</a></li>
                                <li className="mx-4"><a href="/cashier/holesale/add/" className="btn text-white rounded"><i className="bi bi-file-earmark-plus"></i> &nbsp;New Wholesale Bill</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="/" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={Cashier} alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>{userName}</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a className="dropdown-item" href="/"><i className="bi bi-box-arrow-right"></i> &nbsp; Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;