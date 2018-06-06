import React from "react";
import { Link } from 'react-router-dom';
import '../assets/js/main.js';

// Stateless functional Component
const Navigation = props => (
        <div>
            <div className="header">
                <div className="logo">
                    <Link to="/" >
                        <i className="fa fa-connectdevelop"></i>
                        <span>weConnect</span>
                    </Link>
                </div>
                <Link to="#" className="nav-trigger"><span></span></Link>
            </div>
            <div className="side-nav">
                <div className="logo">
                    <Link to="/" >
                        <i className="fa fa-connectdevelop"></i>
                        <span>weConnect</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li className="active">
                            <a href="">
                                <span><i className="fa fa-briefcase"></i></span>
                                <span>Businesses</span>
                            </a>
                        </li>
                                
                        <li>
                            
                            <a href="">
                                <span><i className="fa fa-users"></i></span>
                                <span>Users</span>
                            </a>
                        </li>
                        <li>
                                    
                            <a href="">
                                <span><i className="fa fa-user"></i></span>
                                <span>Account</span>
                            </a>
                        </li>
                        <li>
                                    
                            <a href="login.html">
                                <span><i className="fa fa-sign-in"></i></span>
                                <span>Login</span>
                            </a>
                                    
                        </li>
                        <li>
                            <a href="register.html">
                                <span><i className="fa fa-registered"></i></span>
                                <span>Register</span>
                            </a>
                                    
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );

export default Navigation;