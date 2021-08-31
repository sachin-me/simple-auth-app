import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function PublicRoute({ component: Component, restricted, ...rest }) {
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
    <Route
      {...rest}
      render={(props) =>
        user?._id ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoute;
