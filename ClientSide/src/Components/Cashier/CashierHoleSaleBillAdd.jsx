import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import HoleSaleBillAdd from "./Comps/HoleSaleBillAdd";

function AdminBillAdd(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <HoleSaleBillAdd />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminBillAdd;