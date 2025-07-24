import { useEffect, useState } from 'react';
import { sanitiseInput } from '../../utils/utils';
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../../services/todoService';
import Todo, { type TodoProps } from '../../components/Todo/Todo';
import './TodoPage.scss';

function App() {
  const defaultMessage = 'You have no tasks.';
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  async function handleTodoList() {
    setTodoList(await getTodos());
  }

  async function handleAddTodo(title: string, description: string) {
    try {
      const sanitisedTitle = sanitiseInput(title);
      const sanitisedDescription = sanitiseInput(description);

      await addTodo(sanitisedTitle, sanitisedDescription);
      setTodoList(await getTodos());
    } catch (err) {
      console.error('Failed to add to do');
    }
  }

  async function handleDeleteTodo(id: number) {
    try {
      await deleteTodo(id);
      setTodoList(await getTodos());
    } catch (err) {
      console.error('Failed to delete to do');
    }
  }

  async function handleUpdateTodo(title: string, description: string, id: number) {
    try {
      const sanitisedTitle = sanitiseInput(title);
      const sanitisedDescription = sanitiseInput(description);

      await updateTodo(sanitisedTitle, sanitisedDescription, id);
      setTodoList(await getTodos());
    } catch (err) {
      console.error('Failed to delete to do');
    }
  }

  useEffect(() => {
    handleTodoList();
  }, []);

  return (
    <div className='to-do-page' id='to-do-page'>
      <div className='to-do-list'>
        {
          (
            <ul>
              <Todo
                todo={{ title: '', description: '' }}
                isNewTodo={true}
                onAdd={handleAddTodo}
              />
              {todoList.length > 0 && todoList.map((todo, index) => (
                <Todo
                  todo={todo}
                  key={index}
                  onDelete={handleDeleteTodo}
                  onUpdate={handleUpdateTodo}
                />
              ))}
            </ul>
          )
        }
        { !todoList.length && (<p className='no-to-dos'>{defaultMessage}</p>) }
      </div>
    </div>
  );
}

export default App;
