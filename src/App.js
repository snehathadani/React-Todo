import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  state = {
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
    currentId: 0,
  };

  handleToggleComplete = (taskId) => {
    //console.log("handle toggle complete")
    const {todos} = this.state;
    const todoIndex = todos.findIndex(todo => todo.id === taskId);
    todos[todoIndex].completed = !todos[todoIndex].completed;
    const newTodos = [...todos.slice(0, todoIndex), todos[todoIndex], ...todos.slice(todoIndex + 1)] 
    this.setState({todos: newTodos}) 
  }

  handleAddTask = (text) => {
    //console.log("Handle add task");
    const {todos, currentId} = this.state;
    const newTask = {task: text, id: currentId, completed: false};
    this.setState({todos: [...todos, newTask], currentId: currentId + 1}) 
  }

  handleClearCompleted = () => {
    //console.log("Handle clear completed");
    const {todos} = this.state;
    const remainingTodos = todos.filter(todo => todo.completed === false)
    this.setState({todos: remainingTodos});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const {todos} = this.state
    return (
      <div>
        <TodoList todos={todos} onToggleComplete={this.handleToggleComplete}/>
        <TodoForm onAddTask={this.handleAddTask} onClearCompleted={this.handleClearCompleted}/>
      </div>
    );
  }
}

export default App;
