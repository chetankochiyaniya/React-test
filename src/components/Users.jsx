import React from 'react'
import { Route, Link, useParams, Routes } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  console.log("nested compoenet")
  return  <h1>{id}</h1>
}

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <strong>select a user</strong>
      <ul>
        <li>
          <Link to="/users/1">User 1 </Link>
        </li>
        <li>
          <Link to="/users/2">User 2 </Link>
        </li>
        <li>
          <Link to="/users/3">User 3 </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  )
}

export default Users
