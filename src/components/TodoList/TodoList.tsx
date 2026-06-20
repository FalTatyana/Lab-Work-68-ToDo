import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../TodoCard/ToDoCard";
import type { AppDispatch, RootState } from "../../App/store";
import { useEffect } from "react";
import { deleteTodo, fetchTodo, toggleTodo } from "../../pages/TodoSlice";

const TodoList = () => {

    const dispatch: AppDispatch = useDispatch();

    const { todos, loading, error } = useSelector(
        (state: RootState) => state.todo
    );

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch])

    const handleDelete = (id: string) => {
        dispatch(deleteTodo(id));
        dispatch(fetchTodo());
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return <h2>Error</h2>
    }

    if (!todos.length) {
        return <h4>The to do list is empty</h4>;
    }

    return todos && (
        <>
            {todos.map(todo => (
                <TodoCard 
                onClick={() => handleDelete(todo.id)} 
                key={todo.title} 
                title={todo.title}
                completed={todo.completed} 
                onChange={() => dispatch(toggleTodo(todo))}
                />
            ))
            }
        </>
    )
}

export default TodoList