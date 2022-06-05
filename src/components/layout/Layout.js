import Navigation from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Detail from "../detail/Detail";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import Admin from "../admin/Admin";
import { AuthProvider } from "../../context/AuthContext";

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" exact="exact" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default Layout;
