import React from 'react'
import '../../assets/styles/Summary.css'
import Cards from './Card'
import DataTableComponent from './dataTable'

function Summary() {
  return (
    <div className='details'>
        <h3>User</h3>
        <Cards />
        <DataTableComponent />
    </div>
  )
}

export default Summary