import Dashboad from "./Comps/Dashboad";
import StockAdd from "./Comps/StockAdd";

function AdminStockAdd(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <StockAdd />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminStockAdd;