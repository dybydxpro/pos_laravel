import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import AdminDashboad from './Components/AdminDashboad';
//import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/home" element={<AdminDashboad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
