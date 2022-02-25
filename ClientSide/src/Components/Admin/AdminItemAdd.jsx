import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import ItemAdd from "./Comps/ItemAdd";

function AdminItemAdd(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <ItemAdd />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminItemAdd;