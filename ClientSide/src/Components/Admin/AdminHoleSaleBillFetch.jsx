import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import HoleSaleBillFetch from "./Comps/HoleSaleBillFetch";

function AdminHoleSaleBillFetch(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <HoleSaleBillFetch />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminHoleSaleBillFetch;