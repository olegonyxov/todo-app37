import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../store/reducers/currentTodoSlice';

export default function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.currentTodo.data);
    const [newTodoTitle, setNewTodoTitle] = useState('');

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

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteItem({ id: todoId }));
    };

    return (
        <div>
            <h1>Todos</h1>
            <div>
                <input
                    type="text"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    placeholder="Add new task"
                />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            {todos && todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={() => handleDeleteTodo(todo.id)}>DELETE</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos found.</p>
            )}
        </div>
    );
}