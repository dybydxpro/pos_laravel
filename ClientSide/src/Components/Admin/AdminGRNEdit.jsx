import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import GRNEdit from "./Comps/GRNEdit";

function AdminGRNEdit(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <GRNEdit />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminGRNEdit;