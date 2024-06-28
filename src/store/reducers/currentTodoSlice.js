import { createSlice,} from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const currentTodoSlice = createSlice ({
    name: 'currentTodo',
    initialState,
    reducers :{
        addItem : (state,action) => {
            state.data.push(action.payload);
        },
        deketeItem : (state,action) => {
            state.data = state.data.filter(item => item.id!= action.payload.id)
        },
    },   
})
export const { addItem, deleteItem } = currentTodoSlice.actions;

export default currentTodoSlice.reducer;

