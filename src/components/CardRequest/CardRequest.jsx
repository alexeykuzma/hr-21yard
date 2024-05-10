import React from "react";
import GroupList from "../GroupList";
import style from './CardRequest.module.scss';

const CardRequest = () =>{
  const testMenu = [
    {
      id: 1,
      name: 'Скобяные изделия',
      groups: [
        {
          id: 2,
          name: 'Крепёж',
          groups: [
            {
              id: 3,
              name: 'Саморезы',
              groups: [],
            },
            {
              id: 4,
              name: 'Дюбели',
              groups: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Такелаж',
          groups: [],
        },
      ],
    },
    {
      id: 6,
      name: 'Напольные покрытия',
      groups: [],
    },
  ]


  return (
    <section className={style.CardRequest}>
      <h1 className={style.title}>Форма отправки</h1>
      <form className={style.form}>
        <h2 className={style.form__title}>Информация о товаре</h2>
      <GroupList items={testMenu} />
      </form>
    </section>
  )
}

export default CardRequest;
