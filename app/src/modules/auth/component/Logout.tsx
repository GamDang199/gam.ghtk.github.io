import React from 'react'

const Logout = () => {
  
  const logout = (e: any) => {
    localStorage.clear()
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout