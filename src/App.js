import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTask = id => {
    console.log(id);
    // Update groceries on our state object
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
    this.setState({
      task: this.state.task.map(task => {
        if (task.id === id) {
          return {
            ...task,
            // Same as:
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = TaskName => {
    const newTask = {
      task: TaskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };
  clearCompleted = () => {
    this.setState({
      task: this.state.task.filter(task => !task.completed)
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
       
        <TodoList
        task={this.state.task} 
        toggleTask={this.toggleTask} />
       </div>
    )
  }
}

export default App;





 

