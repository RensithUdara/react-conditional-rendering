function TodoItem({ todo, isCompleted }) {
    if (isCompleted == true) {
        return (
            (<div>
                <div>
                    {todo} - Completed
                </div>
                <br />
            </div>)
        );
    } 
    return (
        (<div>
            <div>
                {todo} - Pending
            </div>
            <br />
        </div>)
    );

}

export default TodoItem;