import { type TodoId, type Todo as TodoTypes } from '../types'

interface Props extends TodoTypes {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleteTodo: ({ id, completed }: Pick<TodoTypes, 'id' | 'completed'>) => void

}
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleteTodo }) => {
  const onCompletedTodoHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompleteTodo({ id, completed: event.target.checked })
  }
  return (
        <div className='view'>
            <input
            className='toggle'
            checked={completed}
            type='checkbox'
            onChange={onCompletedTodoHandler}
            />
            <label>{title}</label>
            <button
            className='destroy'
            onClick={() => {
              onRemoveTodo({ id })
            }}
            />
        </div>
  )
}
