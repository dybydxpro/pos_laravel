import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import ItemEdit from "./Comps/ItemEdit";

function AdminItemEdit(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <ItemEdit />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminItemEdit;