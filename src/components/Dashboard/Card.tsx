import React from "react";
import "../../assets/styles/Cards.css";
import { LiaCoinsSolid } from "react-icons/lia";
import { GrDocumentStore } from "react-icons/gr";
import { PiUsersThree } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  iconBgColor: string;
  iconColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, value, iconBgColor, iconColor }) => {
  return (
    <div className="card">
      <div
        className="card-icon"
        style={{ color: iconColor, backgroundColor: iconBgColor }}
      >
        {icon}
      </div>
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  );
};

const Cards: React.FC = () => {
  return (
    <div className="cards-container">
      <Card
        icon={<HiOutlineUsers />}
        title="Users"
        value={2453}
        iconColor="#DF18FF"
        iconBgColor="#eee"
      />
      <Card
        icon={<PiUsersThree />}
        title="Active Users"
        value={2453}
        iconColor="#5718FF"
        iconBgColor="#eee"
      />
      <Card
        icon={<GrDocumentStore />}
        title="Users with Loans"
        value={2453}
        iconColor="#F55F44"
        iconBgColor="#eee"
      />
      <Card
        icon={<LiaCoinsSolid />}
        title="Users with Savings"
        value={102453}
        iconColor="#FF3366"
        iconBgColor="#eee"
      />
    </div>
  );
};

export default Cards;
