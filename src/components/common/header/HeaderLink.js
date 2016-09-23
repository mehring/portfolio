import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Ink from 'react-ink';

const HeaderLink = ({link}) => {
    return (
        <li className="noselect">
            <Link to={link.route}
                  className="ms-navbar-link"
                  activeClassName="active">
                {link.label}
                <Ink />
            </Link>
        </li>
    );
};

HeaderLink.propTypes = {
    link: PropTypes.object.isRequired
};

export default HeaderLink;