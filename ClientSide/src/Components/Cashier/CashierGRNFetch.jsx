import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import GRNFetch from "./Comps/GRNFetch";

function AdminGRNFetch(){
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="col-2">
                    <Dashboad />
                </div>
                <div className="col">
                    <div>
                        <GRNFetch />
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default AdminGRNFetch;