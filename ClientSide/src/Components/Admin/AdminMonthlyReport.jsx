import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import MonthlyReport from "./Comps/MonthlyReport";

function AdminItemEdit(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <MonthlyReport />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminItemEdit;