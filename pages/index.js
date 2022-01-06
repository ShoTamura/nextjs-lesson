import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className=''>
      <Layout title="Home">
      <p className='min-h-screen py-0 px-2 flex flex-col justify-center items-center'>Hello, Nextjs</p>
      </Layout>
    </div>
  )
}
