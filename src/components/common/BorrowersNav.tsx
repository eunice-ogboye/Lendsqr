import React from 'react';
import { FaUsers, FaShieldAlt, FaMoneyBill, FaPiggyBank, FaCheck, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BorrowersNav.css';

const BorrowersNav: React.FC = () => {
  const menus = [
    { name: 'Users', icon: <FaUsers />, path: '/users' },
    { name: 'Guarantors', icon: <FaShieldAlt />, path: '/guarantors' },
    { name: 'Loan', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Savings', icon: <FaPiggyBank />, path: '/savings' }, 
    { name: 'Users', icon: <FaUsers />, path: '/users' },
    { name: 'Guarantors', icon: <FaShieldAlt />, path: '/guarantors' },
    { name: 'Loan', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Savings', icon: <FaPiggyBank />, path: '/savings' },
    { name: 'Users', icon: <FaUsers />, path: '/users' },
    { name: 'Guarantors', icon: <FaShieldAlt />, path: '/guarantors' },
    { name: 'Loan', icon: <FaMoneyBill />, path: '/loan' },
    { name: 'Savings', icon: <FaPiggyBank />, path: '/savings' },
   
    // Add more menus here...
  ];

  return (
    <div className="side-nav">
      {menus.map((menu, index) => (
        <Link to={menu.path} key={index} className="menu-item">
          <span className="icon">{menu.icon}</span>
          <span className="name">{menu.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BorrowersNav;
