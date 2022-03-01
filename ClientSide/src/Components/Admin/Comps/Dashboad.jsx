import Admin from "./../../../image/Admin.png";

function Dashboard(){
    let userName = sessionStorage.getItem("userName");

    return(
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{width: "280px", height: "98vh"}}>
                <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                    <span className="fs-4">Admin - {userName}</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#item-collapse" aria-expanded="true">
                            Items Manage
                        </button>
                        <div className="collapse" id="item-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/admin/item/" className="text-white rounded">List of Items</a></li>
                                <li className="mx-4"><a href="/admin/item/add/" className="text-white rounded">Add new item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#stock-collapse" aria-expanded="true">
                            Stocks Manage
                        </button>
                        <div className="collapse" id="stock-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/admin/stock/" className="text-white rounded">List of Stocks</a></li>
                                <li className="mx-4"><a href="/admin/stock/add/" className="text-white rounded">Add new Stocks</a></li>
                                <li className="mx-4"><a href="/admin/grn" className="text-white rounded">List of Stocks GRN</a></li>
                                <li className="mx-4"><a href="/admin/grn/add" className="text-white rounded">Add new GRN</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#user-collapse" aria-expanded="true">
                            Users Manage
                        </button>
                        <div className="collapse" id="user-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/admin/user/" className="text-white rounded">List of Users</a></li>
                                <li className="mx-4"><a href="/admin/user/add/" className="text-white rounded">Add new Users</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#sales-collapse" aria-expanded="true">
                            Sales Point
                        </button>
                        <div className="collapse" id="sales-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/admin/sale/" className="text-white rounded">List of Sale Details</a></li>
                                <li className="mx-4"><a href="/admin/sale/add/" className="text-white rounded">New Bill</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-light">
                        Customers
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="/" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={Admin} alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>{userName}</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a className="dropdown-item" href="/">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;