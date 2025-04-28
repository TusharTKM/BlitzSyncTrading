import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { DashboardLayout } from "./components/Layouts/DashboardLayout";
import { DashboardUserProfile } from "./pages/DashboardUserProfile";
import { DashboardUserToken } from "./pages/DashboardUserToken";
import { DashboardUserTrades } from "./pages/DashboardUserTrades";
import { DashboardUserPayments } from "./pages/DashboardUserPayments";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardLayout />} >
            <Route path="" element={<DashboardUserProfile />} />
            <Route path="token" element={<DashboardUserToken />} />
            <Route path="trades" element={<DashboardUserTrades />} />
            <Route path="payments" element={<DashboardUserPayments />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;