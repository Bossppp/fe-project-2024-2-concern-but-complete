import Dashboard from '@/components/Dashboard'
import UserNavigate from '@/components/UserNavigate'
import React from 'react'

function user() {
  return (
    <div className="flex bg-white">
      <UserNavigate />
    <div className=" p-2 w-2/3">
        <Dashboard />
        <Dashboard />{/**mock*/}
        <Dashboard />{/**mock*/}
      </div>
    </div>
  );
}

export default user