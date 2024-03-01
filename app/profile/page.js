import Button from '@/components/Profile/Button'
import Gallary from '@/components/Profile/Gallary'
import Header from '@/components/Profile/Header'
import ProfileDetails from '@/components/Profile/ProfileDetails'
import Tabs from '@/components/Profile/Tabs'
import React from 'react'

const ProfilePage = () => {
  return (
    <main>
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