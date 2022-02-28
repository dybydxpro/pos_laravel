import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import GRNAdd from "./Comps/GRNAdd";

function AdminGRNAdd(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <GRNAdd />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminGRNAdd;