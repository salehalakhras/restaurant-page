import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AboutPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-slate-800 items-center">
        <Header page={2}></Header>
        <div className="text-slate-300 text-6xl font-bold flex p-4">About us</div>
        <div className="h-1/2 w-1/2 p-10 flex items-center bg-slate-900 rounded-lg shadow-lg border border-slate-700 text-slate-300 text-xl text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        <Footer></Footer>
    </div>
  )
}

export default AboutPage
