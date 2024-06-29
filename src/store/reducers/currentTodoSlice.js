import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const currentTodoSlice = createSlice({
    name: 'currentTodo',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id);
        },
        editItem: (state, action) => {
            const { id, title } = action.payload;
            const existingItem = state.data.find(item => item.id === id);
            if (existingItem) {
                existingItem.title = title;
            }
        },
    },
});

export const { addItem, deleteItem, editItem } = currentTodoSlice.actions;

export default currentTodoSlice.reducer;
