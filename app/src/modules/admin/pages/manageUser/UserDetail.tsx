import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actionGetUserById } from '../../redux/adminAction';

const UserDetail = () => {
    let  userId  = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.admin.user)
    useEffect(() => {
        dispatch(actionGetUserById(userId.id))
    }, [userId, dispatch])
  return (
    <div>
        
    </div>
  )
}

export default UserDetail