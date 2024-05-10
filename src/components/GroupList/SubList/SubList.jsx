import React from "react";
import style from "./SubList.module.scss";
import ListItem from "../ListItem/ListItem";
import BackItem from "../BackItem/BackItem";

const SubList = (props) =>{
  const {item, clickNext, clickBack, backName} = props;
  console.log('backName=', backName);

  let list = [(backName!=='')?<li><BackItem name={backName} clickBack={clickBack} /></li>:<li>back test</li>];

  list = list.concat(item.map(el => {
    return <li key={el.id}
    // style={{ display: "flex", width: 100 }}
    >
      {/* {el.id} {el.name} {el.groups.length ? <span onClick={() => {props.click(el.groups)}}>NEXT</span> : null} */}
      <ListItem item={el} clickNext={clickNext}/>
    </li>
  }))

  return(
    <ul className={style.SubList}>
      {/* <button onClick={clickBack}>back</button> */}
      {(backName!=='')?<li><BackItem name={backName} clickBack={clickBack} /></li>:null}
      {/* <li>test назад</li> */}
      
      {Array.isArray(item) ? item.map(el => {
        return <li key={el.id}
        // style={{ display: "flex", width: 100 }}
        >
          {/* {el.id} {el.name} {el.groups.length ? <span onClick={() => {props.click(el.groups)}}>NEXT</span> : null} */}
          <ListItem item={el} clickNext={clickNext}/>
        </li>
      }):null}

      {/* {list}  */}
    
    </ul>

  )
}

export default SubList;
