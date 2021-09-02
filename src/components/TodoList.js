// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        const list = this.props.list.map(item =>{
            return (
                <Todo list = {item} toggleItem = {this.props.toggleItem} />
            );
        });
    
    return (
        <div>
            {list}
        </div>
    )
};
}
export default TodoList;