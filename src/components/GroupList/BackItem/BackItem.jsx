import React from "react";
import style from "./BackItem.module.scss";
import {ReactComponent as ArrowLeft} from '../../asside/img/arrowLeft.svg';

const BackItem = (props) =>{
  const {name, clickBack} = props;

  return(
    <div className={style.BackItem} >
    <ArrowLeft/>
    <span className={style.name} onClick={()=>{clickBack()}}>{name}</span>


  </div>
  )
}

export default BackItem;