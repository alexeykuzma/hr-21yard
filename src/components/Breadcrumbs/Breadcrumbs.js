import React from "react";
import style from "./Breadcrumbs.module.scss";
import {ReactComponent as Arrow} from "../asside/img/arrowLongRight.svg";
import {ReactComponent as Cancel} from "../asside/img/cancel.svg"

const Breadcrumbs = (props)=> {
  const way = props.path;

  const list = way.map((el, index) =>{
    return(
      index <way.length-1?
      <div className={style.path_container}>
        <span className={style.element}>{el.name}</span>
        <Arrow className={style.arrow}/>
      </div>:
      <div className={style.path_container}>
        <span className={style.element}>
          {el.name}
        </span>
        <Cancel className={style.cancel} onClick={props.onCancelClick}/>
      </div>
    )
  })

  return (
    <div className={style.Breadcrumbs}>

{list}
    </div>
  )
}

export default Breadcrumbs;