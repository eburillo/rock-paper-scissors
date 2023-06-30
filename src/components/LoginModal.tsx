import { useContext, useState } from 'react'
import { ScoreContext } from '../context/score'
import { SCORE_ACTIONS } from '../constants'

export default function Login() {
  const [isOpen, setIsOpen] = useState(true)
  const { dispatch } = useContext(ScoreContext)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target?.value)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({
      type: SCORE_ACTIONS.LOGIN,
      payload: inputValue
    })
    setIsOpen(false)
  }

  return (
    <div className={`modal-bg ${!isOpen && 'hidden'}`}>
      <dialog open={isOpen} className='modal-dialog'>
        <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
          <label>Player name</label>
          <input
            className='username-input'
            type='text'
            name='username'
            id='username'
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
          <input className='submit' type='submit' value='Submit' />
        </form>
      </dialog>
    </div>
  )
}
