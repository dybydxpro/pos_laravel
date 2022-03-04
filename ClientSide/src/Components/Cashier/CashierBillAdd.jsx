import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import BillAdd from "./Comps/BillAdd";

function AdminBillAdd(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <BillAdd />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminBillAdd;