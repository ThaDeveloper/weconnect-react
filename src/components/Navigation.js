import React from "react";

// Stateless functional Component
const Navigation = props => (
        <div>
            <div class="header">
                <div class="logo">
                    <a href="index.html">
                        <i class="fa fa-connectdevelop"></i>
                        <span>weConnect</span>
                    </a>
                </div>
                <a href="#" class="nav-trigger"><span></span></a>
            </div>
            <div class="side-nav">
                <div class="logo">
                    <a href="index.html">
                        <i class="fa fa-connectdevelop"></i>
                        <span>weConnect</span>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li class="active">
                            <a href="index.html">
                                <span><i class="fa fa-briefcase"></i></span>
                                <span>Businesseses</span>
                            </a>
                        </li>
                                
                        <li>
                            
                            <a href="">
                                <span><i class="fa fa-users"></i></span>
                                <span>Users</span>
                            </a>
                        </li>
                        <li>
                                    
                            <a href="">
                                <span><i class="fa fa-user"></i></span>
                                <span>Account</span>
                            </a>
                        </li>
                        <li>
                                    
                            <a href="login.html">
                                <span><i class="fa fa-sign-in"></i></span>
                                <span>Login</span>
                            </a>
                                    
                        </li>
                        <li>
                            <a href="register.html">
                                <span><i class="fa fa-registered"></i></span>
                                <span>Register</span>
                            </a>
                                    
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );

export default Navigation;