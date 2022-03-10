import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import DailyReport from "./Comps/DailyReport";

function AdminDailyReport(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <DailyReport />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminDailyReport;