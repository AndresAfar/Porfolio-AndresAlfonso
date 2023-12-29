import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="bg-[#2c2c2c] border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Andres Alfonso</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 md:items-center mt-4 border border-[#e26767] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="#about-me" className='block py-2 px-3 md:p-0 text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#df9a9a] text-[#a7b4c0] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Sobre mi</a>
            </li>
            <li>
                <a href="#projects" className='block py-2 px-3 md:p-0 text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#df9a9a] text-[#a7b4c0] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Proyectos</a>
            </li>
            <li>
                <a href="#concat" className='block py-2 px-3 md:p-0 text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#df9a9a] text-[#a7b4c0] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Contacto</a>                    
            </li>
            <li>
                <a href="/CV" className=' p-2 flex items-center gap-x-1 font-bold rounded hover:-translate-y-0.5 text-[#e26767] hover:bg-red-300/10 transition duration-150 border-2 border-red-300/80'>
                     CV
                    <svg className="w-6 h-6 text-[#e26767] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    </svg>                        
                </a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

  )
}
