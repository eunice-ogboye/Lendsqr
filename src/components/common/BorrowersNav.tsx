import React from 'react';
import { FaUsers, FaShieldAlt, FaMoneyBill, FaPiggyBank } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BorrowersNav.css';

const BorrowersNav: React.FC = () => {
  const menus = [
    { name: 'Users', icon: <FaUsers />, path: '/users' },
    { name: 'Guarantors', icon: <FaShieldAlt />, path: '/guarantors' },
    { name: 'Loan', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Decision Models', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Savings', icon: <FaPiggyBank />, path: '/savings' }, 
    { name: 'Loan Requests', icon: <FaUsers />, path: '/users' },
    { name: 'Whitelist', icon: <FaShieldAlt />, path: '/whitelist' },
    { name: 'Karma', icon: <FaMoneyBill />, path: '/karma' },
  ];
  const businessMenus = [
    { name: 'Organization', icon: <FaUsers />, path: '/users' },
    { name: 'Loan Products', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Saving Products', icon: <FaShieldAlt />, path: '/guarantors' },
    { name: 'Guarantors', icon: <FaShieldAlt />, path: '/guarantors' },
    { name: 'Decision Models', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Savings', icon: <FaPiggyBank />, path: '/savings' }, 
    { name: 'Loan Requests', icon: <FaUsers />, path: '/users' },
    { name: 'Whitelist', icon: <FaShieldAlt />, path: '/whitelist' },
    { name: 'Karma', icon: <FaMoneyBill />, path: '/karma' },
  ];

  return (
    <div className="side-nav">
      <h4 className="menu-item">CUSTOMERS</h4>
      {menus.map((menu, index) => (
        <Link to={menu.path} key={index} className="menu-item">
          <span className="icon">{menu.icon}</span>
          <span className="name">{menu.name}</span>
        </Link>
      ))}
      <h4 className="menu-item">BUSINESS</h4>
      {businessMenus.map((bmenu, index) => (
        <Link to={bmenu.path} key={index} className="menu-item">
          <span className="icon">{bmenu.icon}</span>
          <span className="name">{bmenu.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BorrowersNav;
