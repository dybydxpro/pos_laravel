import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import AdminDashboad from './Components/Admin/AdminHome';
import CashierDashboad from './Components/Cashier/CashierHome';
import AdminItemFetch from './Components/Admin/AdminItemFetch';
import AdminItemAdd from './Components/Admin/AdminItemAdd';
import AdminItemEdit from './Components/Admin/AdminItemEdit';
import AdminStockFetch from "./Components/Admin/AdminStockFetch";
import AdminStockAdd from "./Components/Admin/AdminStockAdd";
import AdminGRNFetch from "./Components/Admin/AdminGRNFetch";
import AdminGRNAdd from "./Components/Admin/AdminGRNAdd";
import AdminGRNEdit from "./Components/Admin/AdminGRNEdit";
import AdminUserFetch from './Components/Admin/AdminUserFetch';
import AdminUserAdd from './Components/Admin/AdminUserAdd';
import AdminUserEdit from "./Components/Admin/AdminUserEdit";
import AdminUserResetPassword from "./Components/Admin/AdminUserResetPassword";
import AdminBillAdd from "./Components/Admin/AdminBillAdd";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboad />} />
          <Route path="/cashier" element={<CashierDashboad />} />
          <Route path="/admin/item" element={<AdminItemFetch />} />
          <Route path="/admin/item/add/" element={<AdminItemAdd />} />
          <Route path="/admin/item/edit/:id" element={<AdminItemEdit />} />
          <Route path="/admin/stock" element={<AdminStockFetch />} />
          <Route path="/admin/stock/add" element={<AdminStockAdd />} />
          <Route path="/admin/grn" element={<AdminGRNFetch />} />
          <Route path="/admin/grn/add" element={<AdminGRNAdd />} />
          <Route path="/admin/grn/edit/:id" element={<AdminGRNEdit />} />
          <Route path="/admin/user" element={<AdminUserFetch />} />
          <Route path="/admin/user/add" element={<AdminUserAdd />} />
          <Route path="/admin/user/edit/:id" element={<AdminUserEdit />} />
          <Route path="/admin/user/resetpassword/:id" element={<AdminUserResetPassword />} />
          <Route path="/admin/sale/add/" element={<AdminBillAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
