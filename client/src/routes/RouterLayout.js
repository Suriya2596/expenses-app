import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RouterLayout = () => {
    return (
        <div className='relative flex '>
            {
                localStorage.getItem("token") && (
                    <section className='h-[calc(100vh-2rem)] w-full max-w-[20rem]'>
                        <NavBar />
                    </section>
                )
            }
            <main className='max-w-screen-xl mx-auto'>
                <Outlet />
            </main>
            <footer className='absolute bottom-0 left-[50%] ml-auto max-w-screen-xl'>
                <Footer />
            </footer>
        </div>
    )
}

export default RouterLayout
