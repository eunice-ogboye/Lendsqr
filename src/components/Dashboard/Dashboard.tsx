import React from 'react'
import TopNav from '../common/topNav'
import BorrowersNav from '../common/BorrowersNav'
import Summary from './Summary'
import '../../assets/styles/components.css'
 

function Dashboard() {
  return (
    <div>
      <TopNav />
      <div className="main">
        <BorrowersNav />
        <Summary />
      </div>
    </div>
  )
}

export default Dashboard