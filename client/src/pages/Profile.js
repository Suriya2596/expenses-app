import React from 'react'
import ProfileDetails from '../components/ProfilePage/ProfileDetails'

const Profile = () => {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <div className='mt-8'>
        <h3 className='white-cl'>User Details</h3>
      </div>
      <div className='mt-4'>
        <ProfileDetails />
      </div>
    </div>
  )
}

export default Profile
