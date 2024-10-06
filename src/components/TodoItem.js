function TodoItem({ todo, isCompleted }) {
    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: isCompleted ? '#d4edda' : '#f8d7da',
        color: isCompleted ? '#155724' : '#721c24',
        textDecoration: isCompleted ? 'none' : 'line-through',
    };

    //Using &&

    // return (
    //     (<div>

    //         {isCompleted && <div>{todo} - Completed</div>}
    //         {!isCompleted && <div>{todo} - Pending</div>}

    //         {/* {isCompleted === true && <div>{todo} - Completed</div>}
    //         {isCompleted === false && <div>{todo} - Pending</div>} */}
    //         <br />
    //     </div>)
    // );

    //Using ternary

    // return (
    //     (<div>
    //         <div>
    //             {todo} - {isCompleted === true ? "Completed" : "Pending"}
    //         </div>
    //         <br />
    //     </div>)
    // );

    return (
        <div style={itemStyle}>
            <span>{todo}</span>
            <span>{isCompleted ? '✔️' : '❌'}</span>
        </div>
    );

    //Using if

    // if (isCompleted == true) {
    //     return (
    //         (<div>
    //             <div>
    //                 {todo} - Completed
    //             </div>
    //             <br />
    //         </div>)
    //     );
    // } 
    // return (
    //     (<div>
    //         <div>
    //             {todo} - Pending
    //         </div>
    //         <br />
    //     </div>)
    // );

}

export default TodoItem;