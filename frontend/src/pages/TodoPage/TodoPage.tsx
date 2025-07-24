import { useEffect, useState } from 'react';
import Intro from '../../components/Intro/Intro';
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
      await addTodo(title, description);
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
      await updateTodo(title, description, id);
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
      <Intro title='To Do App'>
        <p>Welcome to the To Do app.</p>
        <p>The backend is hosted on AWS Lambda to act as the middleman between the AWS Amplify frontend and the DynamoDB database. The deployment of the service is handled by a CI/CD process through GitHub Actions, triggered by an upload to the main branch but can also be triggered manually.</p>
        <p>You are invited to play around with the project but please be respectful with the content you choose to write.</p>
      </Intro>
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
