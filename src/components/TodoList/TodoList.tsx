import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../TodoCard/ToDoCard";
import type { AppDispatch, RootState } from "../../App/store";
import { useEffect } from "react";
import { fetchTodo } from "../../pages/TodoSlice";

const TodoList = () => {

    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todo.todos)

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch])

    return todos && (
        <>
            {todos.map(todo => (
                <TodoCard key={todo.id} title={todo.title} completed={todo.completed} />
            ))
            }
        </>
    )
}

export default TodoList