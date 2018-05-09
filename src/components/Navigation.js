import React from "react";

// Stateless functional Component
const Navigation = props => (
        <div>
            <div className="header">
                <div className="logo">
                    <a href="index.html">
                        <i className="fa fa-connectdevelop"></i>
                        <span>weConnect</span>
                    </a>
                </div>
                <a href="#" className="nav-trigger"><span></span></a>
            </div>
            <div className="side-nav">
                <div className="logo">
                    <a href="index.html">
                        <i className="fa fa-connectdevelop"></i>
                        <span>weConnect</span>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li className="active">
                            <a href="index.html">
                                <span><i className="fa fa-briefcase"></i></span>
                                <span>Businesseses</span>
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