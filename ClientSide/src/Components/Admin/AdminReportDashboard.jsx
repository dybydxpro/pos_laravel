import Dashboad from "./Comps/Dashboad";
import StockWarnings from "./Comps/ReportDashboard";

function ReportDashboard(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <StockWarnings />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default ReportDashboard;