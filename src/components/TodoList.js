import TodoItem from "./TodoItem";

function TodoList() {
    return (
        <div>
            <h1>My Todo List</h1>
            <TodoItem todo="Go Shopping" isCompleted = {true} />
            <TodoItem todo="Do Homework" isCompleted = {false}/>
            <TodoItem todo="Do the assignment" isCompleted = {true}/>
            <TodoItem todo="Play cricket" isCompleted = {false}/>
        </div>
    )
}

export default TodoList;