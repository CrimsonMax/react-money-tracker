import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddNew = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Добавить операцию</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Текст</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Сумма <br />
            <small>(отрицательная - расходы, положительная - доходы)</small></label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Введите сумму..."
          />
        </div>
        <button className="btn">Внести</button>
      </form>
    </>
  )
}