import React, { lazy, Suspense } from 'react'
import {Routes, Route} from 'react-router-dom';
import UserDetail from '../modules/admin/pages/manageUser/UserDetail';
import Profile from '../modules/auth/component/Profile';
import FallbackView from '../_metronic/partials/FallbackView';
// import AdminHomePage from '../modules/admin/pages/AdminHomePage';
// import AdminManageCategory from '../modules/admin/pages/manageCategory/ManageCategory';
// import AdminManageUser from '../modules/admin/pages/manageUser/ManageUser';
// import AdminManageVendor from '../modules/admin/pages/manageVendor/ManageVendor';
// import { USER_ROLE } from '../shared/constant';

const PrivateRoutes = () => {

    const AdminHomePage = lazy(() => import('../modules/admin/pages/AdminHomePage'))
    const AdminManageCategory = lazy(() => import('../modules/admin/pages/manageCategory/ManageCategory'))
    const AdminManageUser = lazy(() => import('../modules/admin/pages/manageUser/ManageUser')) 
    const AdminManageVendor = lazy(() => import('../modules/admin/pages/manageVendor/ManageVendor'))
    return (
    <div>
        <Suspense fallback={<FallbackView />}>
        <Routes>
            <Route path='/home' element={<AdminHomePage />}>
                <Route path='manage-category' element={<AdminManageCategory />}/>
                <Route path='manage-vendor' element={<AdminManageVendor />}/>
                <Route path='manage-user' element={<AdminManageUser />} />
                <Route path='manage-user/:id' element={<UserDetail />} />
                <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
        </Suspense>
    </div>
  )
}

export default PrivateRoutes