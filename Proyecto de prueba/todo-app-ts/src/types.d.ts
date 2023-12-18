export interface Todo {
  id: string
  title: string
  completed: boolean
}
export type TodoId = Pick<Todo, 'id'> // lo que hacemos aca es exportar el tipo, cosa que si cambiamos arriba, no tengamos que cambiar el tipo en todos lados
export type TodoCompleted = Pick<Todo, 'completed'>
export type ListofTodos = Todo[]
