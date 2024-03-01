// import React from 'react'
// const temporalAsync = () => {
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve(true);
//     }, 2000);
//   })
// }

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  {path:'/pricing', text: 'Pricing'},
  {path:'/contact', text: 'Contact'},
  {path:'/we', text: 'We'},
  {path:'/task', text: 'Task'},
  {path:'/about', text: 'About'},
]

export const Navbar = async() => {
  // console.log('Navbar created!!');
  // await temporalAsync();
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href={'/'} className="flex items-center text-white">
          <HomeIcon className="mr-2"/>
          <span>Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {
          navItems.map(navItem=>(
            <ActiveLink key={navItem.path} {...navItem} />
          ))
        }

        {/* <Link className='mr-2' href='/'>Home</Link> */}
        {/* <Link className='mr-2' href='/contact'>Contact</Link>
        <Link className='mr-2' href='/about'>About</Link> */}
    </nav>
  )
}
