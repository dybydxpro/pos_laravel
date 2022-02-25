import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import ItemFetch from "./Comps/ItemFetch";

function AdminItemFetch(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <ItemFetch />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminItemFetch;