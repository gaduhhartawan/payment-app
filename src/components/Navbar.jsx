import React, {useState} from 'react'
import { navLinks } from '../constants'
import { Menu, Close } from '../assets'
import styles from '../style'
import Button from './Button'

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false)
  return (
    <div>
      <nav
        className='font-poppins bg-transparent flex justify-between items-center  md:px-12 p-1 ss:ml-0 ml-10'
      >
        {/* Logo */}
        <div>
          <a
            href="#"
            className='font-bold text-[30px]'
          >
            Saas
          </a>
        </div>
          {/* Navlinks */}
        <div className='md:block hidden'>
          <div className="flex items-center justify-between sm:w-[780px]">
            <ul className='list-none flex '>
              {navLinks.map(link => (
                <li
                  key={link.title}
                  className='mx-2 hover:text-white'
                >
                  <a href={link.id}>{link.title}</a>
                </li>
              ))}
            </ul>
            {/* Button */}
            <div className='flex items-center'>
              <p className='mr-3'>Sign In</p>
              <div className="mb-10">
              <Button
                title="Start Free"
                style={styles.blueBtn}
              />
              </div>
            </div>
            </div>
          </div>
          {/* Close/Open Button on Mobile Screen */}
          <div className='md:hidden block mr-10'>
            <img src={Menu} alt="Menu" onClick={() => setMenuShow(true)} className='cursor-pointer'/>
          </div>
      </nav>
      {/* Sidebar Mobile */}
      <div className={`ss:block fixed z-10 top-0 bg-white h-[100vh] w-[50vw] p-5 ${menuShow ? 'right-0' : '-right-[1000px]'} transition-all duration-[.7s]`}
        show={menuShow}
      >
        <div className='flex justify-end'>
          <img src={Close} alt="close" onClick={() => setMenuShow(false)}
          className='cursor-pointer'
          />
        </div>
        <ul className='list-none flex flex-col justify-center items-center h-[100%]'>
          {navLinks.map(link => (
            <li
              key={link.title}
              className='my-3 hover:text-blue-600 text-[20px] border-b-[2px] hover:border-b-blue-600'
            >
              <a href={link.id}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar