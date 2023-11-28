import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return ( 
        <header>
            <div className="nav-header">
                <h3 className='title-style'>Social
                <small className="text-muted">Feed</small></h3>
            </div>
        </header>
     );
}
 
export default NavBar;