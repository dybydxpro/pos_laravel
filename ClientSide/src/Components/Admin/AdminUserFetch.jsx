import Dashboad from "./Comps/Dashboad";
import UserFetch from "./Comps/UserFetch";

function AdminUserFetch(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <UserFetch />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminUserFetch;