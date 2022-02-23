import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
//import Logout from './Components/Logout';
//import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
