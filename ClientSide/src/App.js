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
import AdminHoleSaleBillAdd from "./Components/Admin/AdminHoleSaleBillAdd"
import AdminBillFetch from "./Components/Admin/AdminBillFetch";
import AdminHoleSaleBillFetch from "./Components/Admin/AdminHoleSaleBillFetch";
import SaleBill from "./Components/Admin/Comps/SaleBill";
import Holesalebill from "./Components/Admin/Comps/Holesalebill";

import CashierItemFetch from './Components/Cashier/CashierItemFetch';
import CashierItemAdd from './Components/Cashier/CashierItemAdd';
import CashierItemEdit from './Components/Cashier/CashierItemEdit';
import CashierStockFetch from "./Components/Cashier/CashierStockFetch";
import CashierStockAdd from "./Components/Cashier/CashierStockAdd";
import CashierGRNFetch from "./Components/Cashier/CashierGRNFetch";
import CashierGRNAdd from "./Components/Cashier/CashierGRNAdd";
import CashierGRNEdit from "./Components/Cashier/CashierGRNEdit";
import CashierBillAdd from "./Components/Cashier/CashierBillAdd";
import CashierHoleSaleBillAdd from "./Components/Cashier/CashierHoleSaleBillAdd"
import CashierBillFetch from "./Components/Cashier/CashierBillFetch";
import CashierHoleSaleBillFetch from "./Components/Cashier/CashierHoleSaleBillFetch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/admin" element={<AdminDashboad />} />
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
          <Route path="/admin/sale/" element={<AdminBillFetch />} />
          <Route path="/admin/sale/add/" element={<AdminBillAdd />} />
          <Route path="/admin/sale/printbill/:id" element={<SaleBill />} />
          <Route path="/admin/holesale/" element={<AdminHoleSaleBillFetch />} />
          <Route path="/admin/holesale/add/" element={<AdminHoleSaleBillAdd />} />
          <Route path="/admin/holesale/printbill/:id" element={<Holesalebill />} />

          <Route path="/cashier" element={<CashierDashboad />} />
          <Route path="/cashier/item" element={<CashierItemFetch />} />
          <Route path="/cashier/item/add/" element={<CashierItemAdd />} />
          <Route path="/cashier/item/edit/:id" element={<CashierItemEdit />} />
          <Route path="/cashier/stock" element={<CashierStockFetch />} />
          <Route path="/cashier/stock/add" element={<CashierStockAdd />} />
          <Route path="/cashier/grn" element={<CashierGRNFetch />} />
          <Route path="/cashier/grn/add" element={<CashierGRNAdd />} />
          <Route path="/cashier/grn/edit/:id" element={<CashierGRNEdit />} />
          <Route path="/cashier/sale/" element={<CashierBillFetch />} />
          <Route path="/cashier/sale/add/" element={<CashierBillAdd />} />
          <Route path="/cashier/sale/printbill/:id" element={<SaleBill />} />
          <Route path="/cashier/holesale/" element={<CashierHoleSaleBillFetch />} />
          <Route path="/cashier/holesale/add/" element={<CashierHoleSaleBillAdd />} />
          <Route path="/cashier/holesale/printbill/:id" element={<Holesalebill />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
