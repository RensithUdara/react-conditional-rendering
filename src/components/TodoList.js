import TodoItem from "./TodoItem";

const todos = [
    "Go Shopping",
    "Do Homework",
    "Do the assignment",
    "Play cricket",
]

function TodoList() {
    return (
        <div style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "400px",
            margin: "20px"
        }}>

            <h1 style={{
                color: "#333",
                textAlign: "center",
                fontSize: "24px",
                marginBottom: "20px"
            }}>
                My Todo List
            </h1>
            {todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} isCompleted={true} style={{ color: "green", fontWeight: "bold" }} />
            }
            )}

            {/* {todos.map((todo) => (<TodoItem todo={todo} isCompleted={true} style={{ color: "green", fontWeight: "bold" }} />
            ))} */}

            {/* <TodoItem todo="Go Shopping" isCompleted={true} style={{ color: "green", fontWeight: "bold" }} />
            <TodoItem todo="Do Homework" isCompleted={false} style={{ color: "red", textDecoration: "line-through" }} />
            <TodoItem todo="Do the assignment" isCompleted={true} style={{ color: "green", fontWeight: "bold" }} />
            <TodoItem todo="Play cricket" isCompleted={false} style={{ color: "red", textDecoration: "line-through" }} /> */}
        </div>
    )
}

export default TodoList;
