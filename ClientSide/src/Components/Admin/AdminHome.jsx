import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import Home from "./Comps/Home";

function AdminHome(){
    return(
        <div>
            <tr>
                <td style={{width: "280px"}}>
                    <Dashboad />
                </td>
                <td style={{width: "1080px"}}>
                    <div>
                        <Home />
                    </div>
                </td>
            </tr>        
        </div>
    );
}

export default AdminHome;