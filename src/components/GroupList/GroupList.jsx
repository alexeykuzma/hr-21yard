import React, { useEffect } from "react";
import style from "./GroupList.module.scss";
// import ListItem from "./ListItem/ListItem";
import { useState } from "react";
import SubList from "./SubList/SubList";

const GroupList = (props) => {
  const [items, setItems] = useState(props.items)
  const [curent, setCurent] = useState([props.items]);
  // console.log(curent);

  // useEffect(()=>{
  //   console.log('grpup list обновился');
  // })
  // //const {id, name, group} = items;

  // // useEffect(() => {
  // //   setCurent([itemsList(props.items)]);
  // //   console.log('run useEffect');
  // //   console.log("curent from useEffect", curent)
  // // }, []);

  const addNewCurent = (arr) => {
    const newcurent = [...curent, arr];
    // newcurent.push(itemsList(arr));
    // newcurent.push(arr);
    // console.log('new current', newcurent, newcurent===curent);

    setCurent(newcurent);
  };

  const removeFromCurent = ()=>{
    const newcurent = [...curent];
    newcurent.pop();
    setCurent(newcurent);
  }

  // console.log('console on component',curent);

  // const listTest = curent.map(el=>{
  //   return <SubList item={el}/>
  // })



  // const itemsList = (massive) => {

  //   // const {id, name, grops} = props;

  //   return <ul>
  //     {massive.map(el => {
  //       return <li key={el.id}
  //       // style={{ display: "flex", width: 100 }}
  //       >
  //         {el.id} {el.name} {el.groups.length ? <span onClick={() => addNewCurent(el.groups)}>NEXT</span> : null}

  //       </li>
  //     })}
  //   </ul>
  // }


  // const list = items.map(el => {
  //   return <li>`{el.id} {el.name}` {el.groups.length ?
  //     <button
  //       onClick={() => { setItems(el.groups) }}>--------
  //     </button> : null}
  //   </li>
  // })

  return (
    <nav className={style.groupList}>
      {/* {itemsList(items)} */}
      {/* <ul> */}
      {/* {list} */}
      {curent.map((el,index)=>{
        return <SubList key={el.id} item = {el} clickNext={addNewCurent} clickBack={removeFromCurent} backName={(index===0) ? '': "Назад"}/>
      })}
      {/* {listTest} */}
      {/* </ul> */}
    </nav>
  )
}

export default GroupList;