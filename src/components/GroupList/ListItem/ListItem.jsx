import {ReactComponent as ArrowRight} from '../../asside/img/arrowRight.svg';
import style from "./ListItem.module.scss";

const ListItem = (props) => {
  const clickNext = props.clickNext;
  const { id = 0, name = '', groups = [] } = props.item;
  const nextHandle = () =>{
    clickNext(groups);
  }

  return (
    <div className={style.ListItem} >
      <span>{name}</span>
      {groups.length ? <div className={style.arrow_right} onClick={nextHandle}><ArrowRight/></div> : null}

    </div>
  )
}
export default ListItem;
