import React from 'react'

const Navbar = () => {
  return (
    <div className="nav flex flex-col">
      <nav className='bg-slate-500'>
        <div className='text-2xl relative p-6'>
          PawsNation
        </div>
        <div className='contents'>
          <ul className='flex gap-10 text-white justify-end p-6 absolute right-0 top-0'>
            <li>Home</li>
            <li>About</li>
            <li>Breeds</li>
            <li>Store Nearby</li>
            <li>Help/Donation</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar