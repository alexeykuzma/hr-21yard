import React, { useEffect } from "react";
import style from "./GroupList.module.scss";
import { useState } from "react";
import SubList from "./SubList/SubList";

const GroupList = (props) => {
  const [items, setItems] = useState(props.items)
  const [curent, setCurent] = useState([props.items]);

  useEffect(() => {
    setCurent([itemsList(props.items)]);
  }, []);

  const addNewCurent = (arr) => {
    const newcurent = [...curent, arr];
    setCurent(newcurent);
  };

  const removeFromCurent = ()=>{
    const newcurent = [...curent];
    newcurent.pop();
    setCurent(newcurent);
  }

  const listTest = curent.map(el=>{
    return <SubList item={el}/>
  })



  const itemsList = (massive) => {
    return <ul>
      {massive.map(el => {
        return <li key={el.id}
        >
          {el.id} {el.name} {el.groups.length ? <span onClick={() => addNewCurent(el.groups)}>NEXT</span> : null}

        </li>
      })}
    </ul>
  }


  const list = items.map(el => {
    return <li>`{el.id} {el.name}` {el.groups.length ?
      <button
        onClick={() => { setItems(el.groups) }}>--------
      </button> : null}
    </li>
  })

  return (
    <nav className={style.groupList}>
      {itemsList(items)}
      <ul>
      {list}
      {curent.map((el,index)=>{
        return <SubList key={el.id} item = {el} clickNext={addNewCurent} clickBack={removeFromCurent} backName={(index===0) ? '': "Назад"}/>
      })}
      {listTest}
      </ul>
    </nav>
  )
}

export default GroupList;
