function Dashboard(){
    let userName = sessionStorage.getItem("userName");

    return(
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{width: "280px", height: "100vh"}}>
                <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                    <span className="fs-4">Admin - {userName}</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <button className="btn btn-toggle align-items-center rounded collapsed text-white" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Items
                        </button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="mx-4"><a href="/admin/item/" className="text-white rounded">List of Items</a></li>
                                <li className="mx-4"><a href="/admin/item/add/" className="text-white rounded">Add new item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-light">
                        Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-light">
                        Orders
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-light">
                        Products
                        </a>
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
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>mdo</strong>
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