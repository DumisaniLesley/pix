
import Notifications from '@/components/Notifications/Notifications'
import Header from '@/components/Shared/Header'

const NotificationPage = () => {
  return (
    <main className='bg-gray-200 h-screen py-5'>
      <Header />
      <Notifications />
      <div className="mt-10">
          <p>Some action buttons here</p>
        </div>
    </main>
  )
}

export default NotificationPage