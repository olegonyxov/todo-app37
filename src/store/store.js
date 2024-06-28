import { configureStore } from '@reduxjs/toolkit';
import currentTodoReducer from './reducers/currentTodoSlice'

const store = configureStore({
    reducer: {
        currentTodo: currentTodoReducer
    }
});

export default store;