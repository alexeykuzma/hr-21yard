import React from "react";
import style from './Header.module.scss';
import Logo from "../Logo";
import User from "../User";
//import userAvatar from "../asside/img/avatar_coordinator.png";




const Header = () => {
  const userAvatar = "./asside/img/avatar_coordinator.png"; 
  // "./asside/img/avatar_coordinator.png";
  return (
    <header className={style.header}>
      <Logo />
      <User userName="Екатерина" userLogo={userAvatar} />

    </header>
  )
}

export default Header;