import React from "react";

const TodoForm = (props) => {
    return (
        <div>
            <h1>Tasks</h1>
            <input 
            type ="text" 
            placeholder="enter task"
            onChange={props.handleChanges}
            />
            <button type="submit" onClick={props.handleSubmit}>
            Add Task
            </button>
            <button onClick = {props.removeTask}>
                Clear Completed Task
            </button>
        </div>
    )
}

export default TodoForm;