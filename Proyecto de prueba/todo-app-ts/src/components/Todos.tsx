import { type TodoId, type ListofTodos, type Todo as TodoTypes } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListofTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleteTodo: ({ id, completed }: Pick<TodoTypes, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleteTodo }) => {
  return (
        <ul className='todo-list' >
            {todos.map((todo) => (
            <li key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
                onCompleteTodo={onCompleteTodo}
                />
            </li>
            ))}
        </ul>
  )
}

export default Todos
