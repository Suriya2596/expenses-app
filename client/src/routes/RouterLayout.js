import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RouterLayout = () => {
    return (
        <div className='relative '>
            <div className=''>
                {
                    localStorage.getItem("token") && (
                        <section className='max-w-screen-lg mx-auto'>
                            <NavBar />
                        </section>
                    )
                }
                <main className='max-w-screen-lg mx-auto'>
                    <Outlet />
                </main>
            </div>
            {/* <footer className='max-w-screen-lg mx-auto'>
                <Footer />
            </footer> */}
        </div>
    )
}

export default RouterLayout
