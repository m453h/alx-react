import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function Footer({ user, isLoggedIn }) {
    return (
        <div className="footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {(user && isLoggedIn) && <a href="#">Contact us</a>}
        </div>
    );
}

Footer.defaultProps = {
    user: null,
    isLoggedIn: false
};

Footer.propTypes = {
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool
};

export function mapStateToProps(state) {
    return {
        isLoggedIn: state.get("isUserLoggedIn"),
        user: state.get('user'),
    };
}

export default connect(mapStateToProps)(Footer);
