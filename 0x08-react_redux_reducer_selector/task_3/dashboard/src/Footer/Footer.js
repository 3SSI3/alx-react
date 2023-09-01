import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";
import "./Footer.css"

//Without using compon a Class, make the comp subscribe to the context changes
// & when user is logged in, display <p> contain link with "Contact us".
function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className="footer">
      {user.isLoggedIn && (
      <p>
        <a href='#'>Contact us</a>
        </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
      </div>
  );
}

export default Footer;