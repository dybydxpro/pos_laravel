import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import AdminDashboad from './Components/Admin/AdminHome';
import CashierDashboad from './Components/Cashier/CashierHome';
import AdminItemFetch from './Components/Admin/AdminItemFetch';
import AdminItemAdd from './Components/Admin/AdminItemAdd';
import AdminItemEdit from './Components/Admin/AdminItemEdit';
import AdminUserFetch from './Components/Admin/AdminUserFetch';
import AdminUserAdd from './Components/Admin/AdminUserAdd';
import AdminUserEdit from "./Components/Admin/AdminUserEdit";
import AdminUserResetPassword from "./Components/Admin/AdminUserResetPassword";


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
          <Route path="/admin/user" element={<AdminUserFetch />} />
          <Route path="/admin/user/add" element={<AdminUserAdd />} />
          <Route path="/admin/user/edit/:id" element={<AdminUserEdit />} />
          <Route path="/admin/user/resetpassword/:id" element={<AdminUserResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
