import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, editItem } from '../store//reducers/currentTodoSlice';

export default function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.currentTodo.data);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');

    const handleAddTodo = () => {
        if (newTodoTitle.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                title: newTodoTitle,
            };
            dispatch(addItem(newTodo));
            setNewTodoTitle('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };
    
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteItem({ id: todoId }));
    };

    const handleEditTodo = (todo) => {
        setEditingTodo(todo);
        setEditingTitle(todo.title);
    };

    const handleSaveEdit = () => {
        if (editingTitle.trim() !== '') {
            dispatch(editItem({ id: editingTodo.id, title: editingTitle }));
            setEditingTodo(null);
            setEditingTitle('');
        }
    };

    return (
        <div>
            <h1>Todos</h1>
            <div>
                <input
                    type="text"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add new task"
                />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            {todos && todos.length > 0 ? (
                <ul className='todo-list'>
                    {todos.map(todo => (
                        <li className='todo-raw' key={todo.id}>
                            {editingTodo && editingTodo.id === todo.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editingTitle}
                                        onChange={(e) => setEditingTitle(e.target.value)}
                                    />
                                    <button onClick={handleSaveEdit}>Save</button>
                                    <button onClick={() => setEditingTodo(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div  className='todo-buttons'>
                                    <span>{todo.title}</span>
                                    <span>
                                    <button onClick={() => handleEditTodo(todo)}>Edit</button>
                                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                                    </span>
                                    
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos found.</p>
            )}
        </div>
    );
}