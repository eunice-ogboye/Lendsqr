import React from 'react';
import { FaUsers, FaShieldAlt, FaMoneyBill, FaPiggyBank, FaCheck, FaChartBar } from 'react-icons/fa';
import './BorrowersNav.css';

const BorrowersNav: React.FC = () => {
  const menus = [
    { name: 'Users', icon: <FaUsers /> },
    { name: 'Guarantors', icon: <FaShieldAlt /> },
    { name: 'Loan', icon: <FaMoneyBill /> },
    { name: 'Savings', icon: <FaPiggyBank /> },
    { name: 'Whitelists', icon: <FaCheck /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    { name: 'Decision Models', icon: <FaChartBar /> },
    // Add more menus here...
  ];

  return (
    <div className="side-nav">
      {menus.map((menu, index) => (
        <div key={index} className="menu-item">
          <span className="icon">{menu.icon}</span>
          <span className="name">{menu.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BorrowersNav;
