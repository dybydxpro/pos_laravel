import "../../CSS/Dashbord.css"
import Dashboad from "./Comps/Dashboad";
import ItemFetch from "./Comps/ItemFetch";

function AdminItemFetch(){
    return(
        <div>
            <tr>
                <td style={{width: "280px"}}>
                    <Dashboad />
                </td>
                <td style={{width: "1080px"}}>
                    <div>
                        <ItemFetch />
                    </div>
                </td>
            </tr>        
        </div>
    );
}

export default AdminItemFetch;