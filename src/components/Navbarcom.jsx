
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import {Link, NavLink} from 'react-router-dom'


export function Component() {
  return (
    <header>

    <Navbar className='bg-[#2c2c2c]'>
      <NavbarBrand as={Link} className='flex space-x-3 rtl:space-x-reverse' >
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Andres Alfonso</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className=' p-4 md:p-0 mt-4 border border-[#e26767] rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
        <NavbarLink href="#about-me" className='transition border-0 py-2 px-2 md:p-0 text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#df9a9a] text-[#a7b4c0]' >
          Sobre mi
        </NavbarLink>
        <NavbarLink href="#projects" className='transition border-0 py-2 px-2 md:p-0 text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-[#df9a9a] text-[#a7b4c0]' >
          Proyectos
        </NavbarLink>
        <NavbarLink href="#concat" className='transition border-0 py-2 px-2 md:p-0 text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-[#df9a9a] text-[#a7b4c0]' >
            Contacto
        </NavbarLink>
        <NavLink to={'../assets/docs/CV_AFAR.pdf'} target='_blank' download={'CV_AndresAlfonso.pdf'} className='p-2 flex items-center gap-x-1 font-bold rounded hover:-translate-y-0.5 text-[#e26767] hover:bg-red-300/10 transition duration-150 border-2 border-red-300/80'>
            CV
            <svg className="w-6 h-6 text-[#e26767] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            </svg>  
        </NavLink>
      </NavbarCollapse>
    </Navbar>
    </header>
  );
}
