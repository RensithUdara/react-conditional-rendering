function TodoItem({ todo, isCompleted }) {
   
    return (
        (<div>
            <div>
                {todo} - {isCompleted == true ? "Completed" : "Pending"}
            </div>
            <br />
        </div>)
    );


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