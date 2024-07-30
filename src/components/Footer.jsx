import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-700/30 rounded-lg shadow m-4">
        <div className="max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-red-300/90 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Andres_Afar</a>. Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#about-me" className="hover:underline me-4 md:me-6">Sobre mi</a>
            </li>
            <li>
                <a href="#projects" className="hover:underline me-4 md:me-6">Proyectos</a>
            </li>
            <li>
                <a href="#concat" className="hover:underline me-4 md:me-6">Contacto</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}
