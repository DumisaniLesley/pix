
import Gallary from '@/components/Profile/Gallary'
import ProfileDetails from '@/components/Profile/ProfileDetails'
import Tabs from '@/components/Profile/Tabs'
import Header from '@/components/Shared/Header'
import React from 'react'

const ProfilePage = () => {
  return (
<main className='px-4 bg-gray-100 py-4'>
        <Header />
        <ProfileDetails />
        <Tabs />
        <Gallary />
        <div className="mt-10">
          <p>Some action buttons here</p>
        </div>
    </main>
  )
}

export default ProfilePage