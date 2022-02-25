import Dashboad from "./Comps/Dashboad";
import UserResetPassword from "./Comps/UserResetPassword";

function AdminUserResetPassword(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <UserResetPassword />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminUserResetPassword;