import Dashboad from "./Comps/Dashboad";
import UserAdd from "./Comps/UserAdd";

function AdminUserAdd(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <UserAdd />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminUserAdd;