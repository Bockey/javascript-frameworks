import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }
  return (
    <Nav className="me-auto">
      <Nav.Link href="/" exact="exact" className="nav-link">
        Home
      </Nav.Link>
      <Nav.Link href="/contact" className="nav-link">
        Contact
      </Nav.Link>
      {auth ? (
        <>
          <Button variant="dark" onClick={logout}>
            Log out
          </Button>
        </>
      ) : (
        <Nav.Link href="/login">Log in</Nav.Link>
      )}
    </Nav>
  );
}

export default Navigation;
