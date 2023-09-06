import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";
import "./Footer.css"
import PropTypes from "prop-types";

//Without using compon a Class, make the comp subscribe to the context changes
// & when user is logged in, display <p> contain link with "Contact us".
export function Footer({ user }) {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href="#">Contact us</a>}
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);