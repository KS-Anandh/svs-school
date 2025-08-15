import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pageNotFound">
      <div className="pnfTitle">
        <h1>404</h1>
        <h1>-</h1>
        <h1>Page Not Found</h1>
      </div>
      <div className="pnInfo">
        <h2>Hello there! 👋</h2>
        <p>It seems you've reached a page that doesn’t exist on our website.</p>
      </div>
      <div className="pnfLinks">
           <ul>
              <Link to={'/'}><li>🏠 Home Page</li></Link>
              <Link to={'/academics'}><li>📘 Academics Page</li></Link>
              <Link to={'/aboutUs'}><li>🏫 About Us Page</li></Link>
           </ul>
      </div>
    </div>
  );
};

export default PageNotFound;
