import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoginHeaderBlock from "@/views/components/login-header-block/Main.jsx";
 
import FrontendConfig from '@/config/frontend-config'
 
 
 
import { observer } from "mobx-react" 
import { Lucide } from '../../base-components';


function Header( {sidebarStore, web3Store, sessionStore, headerStore} ) {

  const [top, setTop] = useState(true);


  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={` w-full z-30  bg-slate-700 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex  mr-4 flex-row">

 

            {/* Logo */}
            <div>


            <Link to="/" className="intro-x flex items-center ml-4">
             
              <img
                 src={FrontendConfig.logo}
                 width="40"
                 height="40"
              />  

              <span className="side-nav__header__text font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.75)] text-slate-400 pt-0.5 text-lg ml-2.5">
                 {FrontendConfig.title}
              </span>
            </Link>
            </div>

          


          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">


            <div className="hidden xl:block flex flex-row">
            {FrontendConfig.navbar.items.map((item, index) => (
               <React.Fragment key={index}>

              {item.label &&  
               <Link to={item.to} 
               className='mx-2 text-lg text-slate-500 hover:text-slate-400' key={index} > {item.label} </Link>
               }

              {item.icon && (
               
               <a href={item.to} target="_blank" rel="noreferrer" className='mx-2 text-lg text-slate-500 hover:text-slate-400' >
                <Lucide
                  icon={item.icon}
                  color="white"
                  className="inline mx-2"
                />
                </a>
 

             )}
             </React.Fragment>

          ))}
            </div>


             
               
            </ul>

          </nav>

          <div 
              className="xl:hidden cursor-pointer" 
              onClick={()=>{ headerStore.toggleMobileNav() }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><path stroke="#cccccc" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22"></path>
                
                </svg>
                
          </div>


        </div>
      </div>
    </header>
  );
}

export default observer(Header);
