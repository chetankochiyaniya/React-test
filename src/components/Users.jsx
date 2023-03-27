import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <strong>select a user</strong>
      <ul>
        <li>
          <Link to="user/1">User 1 </Link>
        </li>
        <li>
          <Link to="user/2">User 2 </Link>
        </li>
      </ul>
      {/* if you want to show data of nested routes that you must add <Outlet /> in side your component */}
      <Outlet/>
    </div>
  )
}

export default Users
