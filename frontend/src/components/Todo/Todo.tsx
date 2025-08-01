import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import TodoModal from '../TodoModal/TodoModal';
import './Todo.scss';

export interface TodoProps {
  title: string,
  description: string,
  id?: number,
}

interface TodoComponentProps {
  todo: TodoProps;
  isNewTodo?: boolean;
  onAdd?: (title: string, description: string) => void;
  onDelete?: (id: number) => void;
  onUpdate?: (title: string, description: string, id: number) => void;
}

export default function Todo({
  todo,
  isNewTodo = false,
  onAdd = () => {},
  onDelete = () => {},
  onUpdate = () => {},
}: TodoComponentProps) {
  const maximumDescriptionLength = 250;
  const maximumTitleLength = 40;
  const descriptionLabel = 'Description:';
  const titleLabel = 'Title (required):';
  const descriptionPlaceholder = `Maximum ${maximumDescriptionLength} characters`;
  const titlePlaceholder = `Maximum ${maximumTitleLength} characters`;
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentTitle(todo.title);
    setCurrentDescription(todo.description);
  }, [todo.title, todo.description]);

  function handleEditTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setEditedTitle(event.target.value);
  }

  async function handleAdd() {
    if (editedTitle) {
      await onAdd(editedTitle, editedDescription);
      setEditedTitle('');
      setEditedDescription('');
    }
  }

  async function handleDelete() {
    if (todo.id !== undefined) {
      await onDelete(todo.id);
      setShowModal(false);
    }
  }

  function handleShowModal(value: boolean) {
    setShowModal(value);
  }

  function handleIsEditing(value: boolean) {
    if (value) {
      setEditedDescription(currentDescription);
      setEditedTitle(currentTitle);
    }
    setIsEditing(() => value);
  }

  async function handleUpdate() {
    if (todo.id !== undefined) {
      await onUpdate(editedTitle, editedDescription, todo.id);
      handleIsEditing(false);
    }
  }

  return (
    <>
      <li className='to-do blue-container'>
        <div className='to-do-header'>
          <div className='headline'>
            { isNewTodo || isEditing
              ? (
                <div className='edit-to-do-title edit-to-do'>
                  <label htmlFor='edit-to-do-title'>{ titleLabel }</label>
                  <input
                    id='edit-to-do-title'
                    type='text'
                    maxLength={maximumTitleLength}
                    onChange={handleEditTitle}
                    placeholder={titlePlaceholder}
                    value={editedTitle}
                  />
                </div>
              ) : (
                <h2 className='to-do-title' data-testid='to-do-title'>{currentTitle}</h2>
              )
            }
          </div>
        </div>
        <div className='to-do-body'>
          { (isNewTodo || isEditing) &&
            (
              <div className='edit-to-do-description edit-to-do'>
                <label htmlFor='edit-to-do-description'>{ descriptionLabel }</label>
                <textarea
                  id='edit-to-do-description'
                  rows={3}
                  maxLength={maximumDescriptionLength}
                  onChange={(event) => setEditedDescription(event.target.value)}
                  placeholder={descriptionPlaceholder}
                  value={editedDescription}
                ></textarea>
              </div>
            )
          }
          {currentDescription && !(isNewTodo || isEditing) &&
            <p className='to-do-description' data-testid='to-do-description'>{currentDescription}</p>
          }
        </div>
        <div className='actions'>
          {
            (!isEditing && !isNewTodo) && (
              <>
                <Button
                  id='edit'
                  onClick={() => handleIsEditing(true)}
                >Edit</Button>
                <Button
                  id='delete'
                  onClick={() => handleShowModal(true)}
                >Delete</Button>
              </>
            )
          }
          {
            isEditing && (
              <>
                <Button
                  id='cancel'
                  onClick={() => handleIsEditing(false)}
                >Cancel</Button>
                <Button
                  id='update'
                  onClick={handleUpdate}
                  disabledCondition={!editedTitle.length}
                >Update</Button>
              </>
            )
          }
          {
            isNewTodo && (
              <>
                <Button
                  id='add'
                  onClick={handleAdd}
                  disabledCondition={!editedTitle.length}
                >Add new to do</Button>
              </>
            )
          }
        </div>
      </li>
      {showModal && createPortal(
        <TodoModal onCancel={() => setShowModal(false)} onConfirm={handleDelete}>
          <p>Are you sure you want to delete "{todo.title}"?</p>
        </TodoModal>,
        document.getElementById('to-do-page') as HTMLElement,
      )}
    </>
  );
}
