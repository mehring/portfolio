import React from 'react';
import {Link} from 'react-router';
import HeaderLink from './HeaderLink';
import HeaderSocialLink from './HeaderSocialLink';

const Header = () => {

    const headerLinks = [
        {
            id: 0,
            label: 'Home',
            route: '/home'
        },
        {
            id: 1,
            label: 'About',
            route: '/about'
        },
        {
            id: 2,
            label: 'Portfolio',
            route: '/portfolio'
        }
    ];

    const headerSocialLinks = [
        {
            id: 0,
            icon: 'fa-linkedin-square',
            href: ''
        },
        {
            id: 1,
            icon: 'fa-facebook-official',
            href: ''
        },
        {
            id: 2,
            icon: 'fa-github-alt',
            href: ''
        }
    ];

    return (
        <div className="ms-header">
            <div className="clearfix container">

                <Link to="/" className="ms-logo">
                    <img src={require('../../../assets/img/logo.png')}/>
                </Link>

                <span className="pull-left">
                    <ul className="ms-navbar">
                        {
                            headerLinks.map(headerLink =>
                                <HeaderLink key={headerLink.id}
                                            link={headerLink}/>
                            )
                        }
                    </ul>
                </span>

                <span className="pull-right">
                    <ul className="ms-navbar">
                        {
                            headerSocialLinks.map(headerSocialLink =>
                                <HeaderSocialLink key={headerSocialLink.id}
                                                  link={headerSocialLink}/>
                            )
                        }
                    </ul>
                </span>

            </div>
        </div>
    );
};

export default Header;