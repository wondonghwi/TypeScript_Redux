import {ActionType, createAction, createReducer} from "typesafe-actions";

let nextId = 1;

export const addTodo = createAction("todos/ADD_TODO", (text: string) => ({
    id: nextId++,
    text: text,
    done: false,
}))<Todo>();

export const toggleTodo = createAction("todos/TOGGLE_TODO")<number>();
export const removeTodo = createAction("todos/REMOVE_TODO")<number>();

const actions = {
    addTodo,
    toggleTodo,
    removeTodo
};

type TodosAction = ActionType<typeof actions>

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

export const todos = createReducer<TodosState, TodosAction>(initialState)
    .handleAction(removeTodo, (state, action) =>
        state.filter((todo) => todo.id !== action.payload)
    )
    .handleAction(toggleTodo, (state, action) =>
        state.map((todo) =>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        )
    )
    .handleAction(addTodo, (state, action) =>
        state.concat({ ...action.payload })
    );

