import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function Header(props) {
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => {
    return {
      user: state.currentUser,
    };
  });

  useEffect(() => {
    if (user?._id) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {

    return <div className="loader">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>;
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Nav className="me-auto" className="justify-content-end">
          {(user?._id && <div className="nav-link">Logout</div>) || (
            <>
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
              <Link to="/signin" className="nav-link">
                Signin
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
