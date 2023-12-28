import React from 'react'

export const Home = () => {

  return (
    <div className='container sm: w-2/3'>
      <section className='perfil'>
        <div className='perfil-content grid gap-3'>
          <div className='perfil-data'>
            <img className="circular--square my-5 sm:w-80 sm:h-80" />
            <h1 className='text-4xl lg:text-6xl font-bold text-bunker-100'>Andres Alfonso</h1>
            <div className='flex gap-5 mt-4 mb-3'>
              <a href="https://github.com/AndresAfar" className='hover:-translate-y-0.5'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github text-red-500/80" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" data-astro-cid-odypcp2q=""><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-odypcp2q=""></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-odypcp2q=""></path></svg></a>
              <a href="https://www.linkedin.com/in/andres-alfonso-rojas-web-developer/" className='hover:-translate-y-0.5'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin text-red-500/80" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" data-astro-cid-odypcp2q=""><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-odypcp2q=""></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" data-astro-cid-odypcp2q=""></path><path d="M8 11l0 5" data-astro-cid-odypcp2q=""></path><path d="M8 8l0 .01" data-astro-cid-odypcp2q=""></path><path d="M12 16l0 -5" data-astro-cid-odypcp2q=""></path><path d="M16 16v-3a2 2 0 0 0 -4 0" data-astro-cid-odypcp2q=""></path></svg></a>
              <a href="mailto:afar2503@gmail.com" className='hover:-translate-y-0.5'><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="text-3xl text-red-500/85" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a>
            </div>
          </div>
          <article className='perfil-description text-[16px] md:text-[20px] text-pretty mb-3'>
            <p>Desarrollador web fullstack con habilidades en frontend y backend experiencia en diseño y desarrollo de aplicaciones web utilizando tecnologías front-end y back-end. Experto en crear soluciones interactivas y funcionales.</p>
            <p>Mi interés en el desarrollo web se centra en crear soluciones creativas e innovadoras  que mejoren la vida de las personas y hagan crecer los negocios. Me mantengo actualizado en las últimas tecnologías y tendencias  de industria para crear aplicaciones eficientes y escalables.</p>
          </article>
        </div>
      </section>
      <section className='about-me my-8' id='about-me'>
        <div className='about-me-content grid gap-3 bg-bunker-950/50 px-6 lg:px-8 py-10 rounded-md ring-1 ring-bunker-500/20 ring-[#e26767]'>
          <h2 className='about-me-tittle text-2xl md:text-4xl font-medium'>Sobre mi</h2>
          <div className='about-me-item text-[16px] md:text-[20px] text-pretty'>
            <p>Mi viaje está marcado por la pasión por el skateboarding, una forma de expresión que me enseñó a abrazar el riesgo y la innovación. Además, mi amor por los videojuegos de estrategia en tiempo real ha cultivado mi habilidad para pensar de manera táctica y resolver problemas de forma creativa. Combinando estas experiencias con mi dedicación al desarrollo web, encuentro una sinergia única entre la creatividad, la lógica y la tecnología.</p>
            <p>Como apasionado del desarrollo web, he trabajado con diversas tecnologías, incluyendo Python, MySQL, JavaScript, ReactJs y un  poco de Java. Estas herramientas han sido los cimientos sobre los cuales he construido proyectos significativos, aprovechando su versatilidad y potencial para crear soluciones innovadoras.</p>
          </div>
        </div>
      </section>
      <section className='projects my-8' id='projects'>
        <div className='projects-content bg-bunker-950/50 px-6 lg:px-8 py-10 rounded-md ring-1 ring-bunker-500/20 ring-[#e26767]'>
          <h2 className='projects-me-tittle text-2xl md:text-4xl font-medium'>Proyectos</h2>
          <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="my-8  sm:w-full min-w-[105px] rounded-xl shadow-lg dark:shadow-gray-900 bg-[#4e4242] dark:bg-gray-800 duration-300 hover:-translate-y-1 border-2 border-[#e26767]">
              <a _href="link" className="cursor-pointer ">
                <figure>
                  <a href="https://github.com/AndresAfar/orddoOld" target="_blank">
                    <img className="proorddo rounded-t-lg h-48 w-full aspect-auto" />
                  </a>
                  <figcaption className="p-4 block">
                    <a href="https://github.com/AndresAfar/orddoOld" target='_blank' className="text-[20px] md:text-[20px] mb-4 font-bold leading-relaxed  dark:text-gray-300 hover:underline">OrderPos</a>
                    <p className='text-sm sm:text-base leading-5 dark:text-gray-400'> Sistema POS para toma de pedidos de restaurante.</p>
                    <div className='inline-flex flex-wrap justify-between p-2 gap-2'>
                      <div className='rounded-full py-1 text-sm font-medium px-3  text-red-300 bg-red-300/10'>
                        PHP
                      </div>
                      <div className='rounded-full py-1 text-sm font-medium px-3  text-red-300 bg-red-300/10'>
                        JavaScript
                      </div>
                      <div className='rounded-full py-1 text-sm font-medium px-3  text-red-300 bg-red-300/10'>
                        Bootstrap
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="my-8  sm:w-full min-w-[105px] rounded-xl shadow-lg dark:shadow-gray-900 bg-[#4e4242] dark:bg-gray-800 duration-300 hover:-translate-y-1 border-2 border-[#e26767]">
              <a _href="link" className="cursor-pointer">
                <figure>
                  <a href="https://pypi.org/project/django-times/" target="_blank">
                    <img className="rounded-t-lg h-48 w-full object-cover object-center" src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django" alt="Django Times"/>
                  </a>
                  <figcaption className="p-4">
                    <p className="text-sm sm:text-lg mb-4 font-bold leading-relaxed  dark:text-gray-300">asdasdsad</p>
                    <small className="text-xs sm:text-base leading-5  dark:text-gray-400"> asdasdasd</small>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="my-8  sm:w-full min-w-[105px] rounded-xl shadow-lg dark:shadow-gray-900 bg-[#4e4242] dark:bg-gray-800 duration-300 hover:-translate-y-1 border-2 border-[#e26767]">
              <a _href="link" className="cursor-pointer">
                <figure>
                <a href="https://pypi.org/project/django-times/" target="_blank">
                        <img className="rounded-t-lg h-48 w-full object-cover object-center" src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django" alt="Django Times"/>
                    </a>
                  <figcaption className="p-4">
                    <p className="text-sm sm:text-lg mb-4 font-bold leading-relaxed  dark:text-gray-300">asdasdsad</p>
                    <small className="text-xs sm:text-base leading-5  dark:text-gray-400"> asdasdasd</small>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='skills my-8' id='skills'>
        <div className='skills-content bg-bunker-950/50 px-6 lg:px-8 py-10 rounded-md ring-1 ring-bunker-500/20 ring-[#e26767]'>
          <h2 className='skills-tittle text-2xl md:text-4xl font-medium'>Habilidades</h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-2 lg:gap-6 group/list">
            <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path></svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">HTML</h5>
            </div>
            <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">CSS</h5>
            </div>
            <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">JavaScript</h5>
            </div>
            <div className="text-red-300/80  p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
              </svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">React</h5>
            </div>
            <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 26 26" className="text-5xl" height="1em" width="1em">
                <path d="M 12.875 1.03125 C 11.855469 1.035156 10.855469 1.132813 10 1.28125 C 7.480469 1.722656 7.03125 2.644531 7.03125 4.34375 L 7.03125 6.96875 L 13.03125 6.96875 L 13.03125 8.03125 L 4.1875 8.03125 C 2.457031 8.03125 0.914063 9.074219 0.4375 11.03125 C -0.109375 13.273438 -0.132813 14.65625 0.4375 17 C 0.863281 18.742188 1.894531 20 3.625 20 L 6 20 L 6 16.71875 C 6 14.773438 7.699219 12.96875 9.71875 12.96875 L 14.96875 12.96875 C 16.625 12.96875 17.96875 11.613281 17.96875 9.96875 L 17.96875 4.34375 C 17.96875 2.746094 16.585938 1.550781 14.96875 1.28125 C 13.945313 1.113281 13.894531 1.027344 12.875 1.03125 Z M 9.5 3.375 C 10.113281 3.375 10.625 3.878906 10.625 4.5 C 10.625 5.117188 10.113281 5.625 9.5 5.625 C 8.882813 5.625 8.375 5.117188 8.375 4.5 C 8.375 3.878906 8.882813 3.375 9.5 3.375 Z M 19 7 L 19 10.28125 C 19 12.226563 17.300781 14.03125 15.28125 14.03125 L 10.03125 14.03125 C 8.375 14.03125 7.03125 15.386719 7.03125 17.03125 L 7.03125 22.65625 C 7.03125 24.253906 8.414063 25.453125 10.03125 25.71875 C 11.054688 25.886719 11.105469 25.976563 12.125 25.96875 C 13.144531 25.964844 14.144531 25.867188 15 25.71875 C 17.519531 25.28125 17.96875 24.355469 17.96875 22.65625 L 17.96875 20.03125 L 11.96875 20.03125 L 11.96875 18.96875 L 20.8125 18.96875 C 22.542969 18.96875 24.085938 17.925781 24.5625 15.96875 C 25.109375 13.726563 25.132813 12.34375 24.5625 10 C 24.136719 8.257813 23.105469 7 21.375 7 Z M 15.5 21.375 C 16.117188 21.375 16.625 21.882813 16.625 22.5 C 16.625 23.121094 16.117188 23.625 15.5 23.625 C 14.886719 23.625 14.375 23.121094 14.375 22.5 C 14.375 21.882813 14.886719 21.375 15.5 21.375 Z"></path>
              </svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">Python</h5>
            </div>
            <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
              <svg className='text-5xl' fill="#cd9798" width="1em" height="1em" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#cd9798"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.064"></g><g id="SVGRepo_iconCarrier"> <title>pandas</title> <path d="M11.849 2.813h3.269v6.787h-3.268zM11.849 16.755h3.269v6.789h-3.268zM11.849 11.582h3.269v3.203h-3.268zM6.598 8.393h3.268v22.563h-3.269zM16.992 22.356h3.269v6.787h-3.269zM16.992 8.401h3.269v6.787h-3.269zM16.992 17.171h3.269v3.203h-3.269zM22.134 1.045h3.269v22.563h-3.269z"></path> </g></svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">Pandas</h5>
            </div>
            <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
              <svg className='text-5xl' fill="currentColor" stroke="currentColor"width="2em" height="1em" viewBox="0 -2 26 26" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"></path></g></svg>
              <h5 className="text-sm lg:text-md font-medium mt-2">MySQL</h5>
            </div>
          </div>
        </div>
      </section>
      <section className='concat my-8' id='concat'>
        <div className='contac-content bg-bunker-950/50 px-6 lg:px-8 py-10 rounded-md ring-1 ring-bunker-500/20 ring-[#e26767]'>
          <h2 className='contac-tittle text-2xl md:text-4xl font-medium'>Contacto</h2>
          <form className="max-w-sm mx-auto" action="https://formsubmit.co/51129ba5fccf8e67f57e8eee0e49c479" method="POST">
            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium  dark:text-white">Nombre</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm bg-[#4e4242] border border-e-0 border-[#e26767] rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-[#e26767] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
              </span>
              <input type="text" id="website-admin" name='name' className=" rounded-none rounded-e-lg bg-[#4e4242] border border-[#e26767]  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#CDD9E4]" placeholder="Tu nombre"/>
            </div>

            <label htmlFor="emailMess" className="block mb-2 mt-4 text-sm font-medium">Correo Electrónico</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm bg-[#4e4242] border border-e-0 border-[#e26767] rounded-s-md ">
              <svg className="w-4 h-4 text-[#e26767]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </span>
              <input type="email" name='email' id="emailMess" className=" rounded-none rounded-e-lg bg-[#4e4242] border border-[#e26767]  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#CDD9E4] " placeholder="tucorreo@dominio.com"/>
            </div>

            <label htmlFor="message" className="block mb-2 mt-4 text-sm font-medium  dark:text-white">Mensaje</label>
            <textarea id="message" name='comments' rows="4" className="block p-2.5 w-full text-sm  bg-[#4e4242] rounded-lg border border-[#e26767] placeholder:text-[#CDD9E4] focus:ring-blue-500 focus:border-blue-500 " placeholder="Escribe tu mensaje..."></textarea>
            
            <div className="flex items-start mb-6 mt-4">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" name="spam" value="True" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required=""/>
              </div>
              <label htmlFor="terms" className="ml-2 text-sm font-medium  dark:text-gray-300">Confirmo que no es un correo spam.</label>
            </div>

            <button type="submit" className="text-[#CDD9E4] bg-[#e26767] hover:bg-[#927676] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
            <input type="hidden" name='_next' value='https://andresalfonso.com/' />
            <input type="hidden" name="_subject" value="Correo Contacto portafolio"></input>
            <input type="hidden" name="_template" value="table"></input>
          </form>
        </div>
      </section>
    </div>
  )
}
