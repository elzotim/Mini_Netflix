import React, { useState } from 'react';
import '../Scss/_nav.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Nav = () => {
   const [NavBlack,setNavBlack]=useState(false)
   const [toggleMenu,settoggleMenu]=useState(false)

    const transitionNav = ()=>{
        window.scrollY>100?setNavBlack(true):setNavBlack(false)
    };
    useState (()=>{
        document.addEventListener("scroll" , transitionNav)
    })
    console.log(NavBlack)
    const handlclick = ()=>{
        toggleMenu?settoggleMenu(false):settoggleMenu(true)
    };console.log(toggleMenu +"ddd");
    useState (()=>{
        document.addEventListener("scroll" , transitionNav)
    })
   /*scroll*/

    /*scroll*/
    return (
       
        <div className={`nav    ${NavBlack || toggleMenu? "nav--black" :"nav--transparent"} ${toggleMenu &&"show"} `}>
          <button onClick={handlclick} className='nav_burger'><MenuIcon/></button>   
          <img src='./images/netflix.png' className='nav--logo' alt='NetFlix' />
          <nav className='nav__links '> 
          <a href='/' className='nav__link'>
              Accueil
          </a>
          <a href='/' className='nav__link'>
              Séries
          </a>
          <a href='/' className='nav__link'>
              Films
          </a>
          </nav>
          <div className='nav__actions'>
          <a className='nav__action' href='/'> <SearchIcon/></a>
          <a className='nav__action' href='/'> Direct</a>
          <a className='nav__action' href='/'><CardGiftcardIcon/></a>
          <a className='nav__action' href='/'> <NotificationsIcon/></a>
          <a className='nav__action' href='/'> <img src='./images/avatar.png' width={20}/></a>
         </div>
        
        </div>
    );
};

export default Nav;