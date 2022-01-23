import {Link} from "react-router-dom";
import React, {Component} from 'react';
import logo from '../../assets/img/logo.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <Link to="/">
                    <img src={logo} alt="Businex-Logo"/>
                </Link>
            </div>
        );
    }
}

export default Logo;