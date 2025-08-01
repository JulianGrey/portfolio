import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Todo from './Todo';

beforeEach(() => {
  const div = document.createElement('div');
  div.setAttribute('id', 'to-do-app');
  document.body.appendChild(div);
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Todo component', () => {
  const findAddButton = () => screen.queryByTestId('add-button');
  const findCancelButton = () => screen.queryByTestId('cancel-button');
  const findDeleteButton = () => screen.queryByTestId('delete-button');
  const findEditButton = () => screen.queryByTestId('edit-button');
  const findModal = () => screen.queryByTestId('todo-modal');
  const findUpdateButton = () => screen.queryByTestId('update-button');

  it('shows the provided title', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    const title = screen.getByTestId('to-do-title');

    expect(title.textContent).toBe('Test Title');
  });

  it('shows the description if provided', () => {
    render(<Todo todo={{ title: 'Test Title', description: 'Test Description' }} />);
    const description = screen.getByTestId('to-do-description');

    expect(description.textContent).toBe('Test Description');
  });

  it('does not show the description if not provided', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    const description = screen.queryByTestId('to-do-description');

    expect(description).toBeNull();
  });

  it('shows the edit and delete buttons by default', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    const deleteButton = findDeleteButton();
    const editButton = findEditButton();

    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  it('shows the save and cancel buttons in edit mode', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    let deleteButton = findDeleteButton();
    let editButton = findEditButton();

    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();

    if (editButton) {
      fireEvent.click(editButton);
    }

    const cancelButton = findCancelButton();
    const updateButton = findUpdateButton();
    deleteButton = findDeleteButton();
    editButton = findEditButton();

    expect(deleteButton).toBeNull();
    expect(editButton).toBeNull();
    expect(cancelButton).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
  });

  it('goes back to the default actions view', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    let cancelButton = findCancelButton();
    let deleteButton = findDeleteButton();
    let editButton = findEditButton();
    let updateButton = findUpdateButton();

    expect(cancelButton).toBeNull();
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(updateButton).toBeNull();

    if (editButton) {
      fireEvent.click(editButton);
    }

    cancelButton = findCancelButton();
    updateButton = findUpdateButton();
    deleteButton = findDeleteButton();
    editButton = findEditButton();

    expect(cancelButton).toBeInTheDocument();
    expect(deleteButton).toBeNull();
    expect(editButton).toBeNull();
    expect(updateButton).toBeInTheDocument();

    if (cancelButton) {
      fireEvent.click(cancelButton);
    }

    cancelButton = findCancelButton();
    deleteButton = findDeleteButton();
    editButton = findEditButton();
    updateButton = findUpdateButton();

    expect(cancelButton).toBeNull();
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(updateButton).toBeNull();
  });

  it('should show the Add button for new to dos', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} isNewTodo={true} />);
    const addButton = findAddButton();
    const cancelButton = findCancelButton();
    const deleteButton = findDeleteButton();
    const editButton = findEditButton();
    const updateButton = findUpdateButton();

    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(editButton).toBeNull();
    expect(updateButton).toBeNull();
  });

  it('should not show the "Add" button for saved to dos when viewing or editing', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    let addButton = findAddButton();
    let cancelButton = findCancelButton();
    let editButton = findEditButton();

    expect(addButton).toBeNull();
    expect(cancelButton).toBeNull();
    expect(editButton).toBeInTheDocument();

    if (editButton) {
      fireEvent.click(editButton);
    }

    addButton = findAddButton();
    cancelButton = findCancelButton();
    editButton = findEditButton();

    expect(addButton).toBeNull();
    expect(cancelButton).toBeInTheDocument();
    expect(editButton).toBeNull();
  });

  it('should show a modal when the "Delete" button is clicked', () => {
    render(<Todo todo={{ title: 'Test Title', description: '' }} />);
    const deleteButton = findDeleteButton();
    expect(deleteButton).toBeInTheDocument();

    if (deleteButton) {
      fireEvent.click(deleteButton);
    }

    const modal = findModal();
    expect(modal).toBeInTheDocument();
  });
});
