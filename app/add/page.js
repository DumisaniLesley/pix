import CreatePost from '@/components/Add/CreatePost'
import Header from '@/components/Shared/Header'

const AddPostPage = () => {
  return (
    <main className='h-screen'>
        <Header />
        <CreatePost />
        {/* <div className="mt-12">
            some info
        </div> */}
    </main>
  )
}

export default AddPostPage