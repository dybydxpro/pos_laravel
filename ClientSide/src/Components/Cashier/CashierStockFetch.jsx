import Dashboad from "./Comps/Dashboad";
import StockFetch from "./Comps/StockFetch";

function AdminStockFetch(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <StockFetch />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminStockFetch;