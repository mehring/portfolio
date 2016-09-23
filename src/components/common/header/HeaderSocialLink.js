import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Ink from 'react-ink';

const HeaderSocialLink = ({link}) => {

    const getIconClass = (icon) => {
        return 'fa ' + icon;
    };

    return (
        <li className="noselect">
            <Link to="/"
                  className="ms-navbar-link"
                  activeClassName="active">
                <span className={getIconClass(link.icon)}></span>
                <Ink />
            </Link>
        </li>
    );
};

HeaderSocialLink.propTypes = {
    link: PropTypes.object.isRequired
};

export default HeaderSocialLink;