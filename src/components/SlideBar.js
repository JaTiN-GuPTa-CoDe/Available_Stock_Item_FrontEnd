import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SliderBar.css';

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNavbar = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div id="body-pd" className={isToggled ? 'body-pd' : ''}>
      <header className={`header ${isToggled ? 'body-pd' : ''}`} id="header">
        <div className="header_toggle">
          <i
            className={`bx ${isToggled ? 'bx-x' : 'bx-menu'}`} // Toggle between bx-menu and bx-x icons
            id="header-toggle"
            onClick={toggleNavbar}
          ></i>
        </div>
        <div className="header_signout">
          <Link to="/signout" className="nav_link">
            <i className="bx bx-log-out"></i> {/* SignOut icon */}
            <span className="nav_name">SignOut</span>
          </Link>
        </div>
      </header>

      <div className={`l-navbar ${isToggled ? 'show' : ''}`} id="nav-bar">
        <nav className="nav">
          <div>
            <Link to="/admindashboard" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">Admin Dashboard</span>
            </Link>
            <div className="nav_list">
              <Link to="/viewshopowner" className="nav_link">
                <i className={`bx ${isToggled ? 'bx-user-check' : 'bx-user'} nav_icon`}></i>
                <span className="nav_name">View ShopOwners</span>
              </Link>
              <Link to="/addshopowner" className="nav_link">
                <i className={`bx ${isToggled ? 'bx-message-square-edit' : 'bx-message-square-detail'} nav_icon`}></i>
                <span className="nav_name">Add ShopOwner</span>
              </Link>
              <Link to="/viewproduct" className="nav_link">
                <i className={`bx ${isToggled ? 'bx-bookmark-heart' : 'bx-bookmark'} nav_icon`}></i>
                <span className="nav_name">View Products</span>
              </Link>
              <Link to="/addproductpage" className="nav_link">
                <i className={`bx ${isToggled ? 'bx-folder-plus' : 'bx-folder'} nav_icon`}></i>
                <span className="nav_name">Add Product</span>
              </Link>
              <Link to="/contactdeatils" className="nav_link">
                <i className={`bx ${isToggled ? 'bx-bar-chart' : 'bx-bar-chart-alt-2'} nav_icon`}></i>
                <span className="nav_name">Contact Details</span>
              </Link>
            </div>
          </div>
          {/* SignOut button inside the slider */}
          {/* <Link to="/signout" className="nav_link">
            <i className="bx bx-log-out"></i>
            <span className="nav_name">SignOut</span>
          </Link> */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
