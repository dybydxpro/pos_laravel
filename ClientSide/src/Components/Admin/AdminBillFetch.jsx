import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import BillFetch from "./Comps/BillFetch";

function AdminBillFetch(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <BillFetch />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminBillFetch;