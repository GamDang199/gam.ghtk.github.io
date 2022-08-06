import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionLogout } from '../redux/AuthActions';

const Logout = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const logout = (e: any) => {
    dispatch(actionLogout())
    navigate('../../', {replace: true})
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout