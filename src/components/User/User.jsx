import React from "react";
import style from "./User.module.scss";


const User = ({ userName, userLogo }) => {
  return (
    <div className={style.user}>
      <img className={style.user__logo} alt="ico" src={userLogo} />
      <span className={style.user__name}>{userName}</span>
    </div>
  )
}

export default User;