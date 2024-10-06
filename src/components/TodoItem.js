function TodoItem({ todo, isCompleted }) {

    //Using &&

    return (
        (<div>

            {isCompleted && <div>{todo} - Completed</div>}
            {!isCompleted && <div>{todo} - Pending</div>}

            {/* {isCompleted == true && <div>{todo} - Completed</div>}
            {isCompleted == false && <div>{todo} - Pending</div>} */}
            <br />
        </div>)
    );

    //Using ternary

    // return (
    //     (<div>
    //         <div>
    //             {todo} - {isCompleted == true ? "Completed" : "Pending"}
    //         </div>
    //         <br />
    //     </div>)
    // );

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