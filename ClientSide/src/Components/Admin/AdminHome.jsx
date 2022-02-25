import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import Home from "./Comps/Home";

function AdminHome(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <Home />
                    </div>
                </div>
            </div>        
        </div>
    );
}

export default AdminHome;