import s from './Order.module.scss'

const TableItem = ({order, title, count, price}) => {
  return (
    <div className={s.item}>
      <p className={s.item__order}>{order}.</p>
      <p className={s.item__title}>{title}</p>
      <p className={s.item__count}>{count} шт.</p>
      <p className={s.item__price}>{price} грн.</p>
      <p className={s.item__sum}>{price*count} грн.</p>
    </div>
  )
}

export default TableItem