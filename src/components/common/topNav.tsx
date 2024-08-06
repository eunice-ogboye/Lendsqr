import React, { useState } from 'react';
import { FaBell, FaSearch, FaCaretDown } from 'react-icons/fa';
import './topNav.css';
import User from '../../assets/images/profile.png'
import logo from '../../assets/images/logo.png'

const TopNav: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="top-nav">
      <img src={logo} alt="Logo" className="login-logo" />
      <div className="search-container">
        <input type="text" placeholder="Search..." className="filter-search" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="icons">
        <FaBell className="notification-icon" />
        <div className="profile" onClick={toggleDropdown}>
          <img src={User} alt="Profile" />
          <span className="name">John Doe</span>
          <FaCaretDown className="dropdown-icon" />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
