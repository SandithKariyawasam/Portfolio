import React from 'react'

const account = () => {
  return (
    <div>
      <h1>Account Settings</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default account
