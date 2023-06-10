import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RouterLayout = () => {
    return (
        <div className='relative h-[100vh]'>
            <NavBar />
            <main className='ml-auto max-w-screen-xl '>
                <Outlet />
            </main>
            <footer className='absolute bottom-0 left-[50%] ml-auto max-w-screen-xl'>
                <Footer />
            </footer>
        </div>
    )
}

export default RouterLayout
