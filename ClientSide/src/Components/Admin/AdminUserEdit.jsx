import Dashboad from "./Comps/Dashboad";
import UserEdit from "./Comps/UserEdit";

function AdminUserEdit(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <UserEdit />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminUserEdit;