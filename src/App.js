import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const taskList = 
[{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Wash Dishes',
  id: 1528817085000,
  completed: false
},
{
  task: 'Fold Clothes',
  id: 1528817086000,
  completed: false
},
{
  task: 'Vacuum Apartment',
  id: 1528817087000,
  completed: false
}];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      taskList
      }
    };
  

  addTask = (text) => {
    //console.log('test',text);
    const newTask = {
      task: text,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
    })
  };

  removeTask = () => {
    const item = this.state.taskList.filter
    (
      item => !item.completed?
      item: ""
    )
    this.setState({taskList: item})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.addTask();
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      ...this.state.taskList,
      task: event.target.value,
    })
    console.log('test', this.state.taskList)
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoForm
        handleSubmit={this.handleSubmit}
        handleChanges={this.handleChanges}
        addItem={this.addTask}
        deleteItem={this.removeTask}
         />
      {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
