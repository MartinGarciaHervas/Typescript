interface Todo {
  id: number
  title: string
  completed: boolean
}
type ListofTodos = Todo[]

interface Props {
  todos: ListofTodos
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
        <ul>
            {todos.map((todo) => <li key={todo.id}>
                {todo.title}
            </li>)}
        </ul>
  )
}

export default Todos
