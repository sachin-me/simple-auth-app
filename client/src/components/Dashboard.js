import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

function Dashboard(props) {
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
    setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <Card className="form-wrapper center">
      {
        user?._id && (
          <Card.Body className="card-info">Hello, {user.name} 👋 .</Card.Body>
        ) || <Card.Body>Please <Link to="/signin">login</Link> here.</Card.Body>
      }
    </Card>
  );
}

export default Dashboard;
