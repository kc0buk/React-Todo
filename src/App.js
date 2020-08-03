import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const taskList = [
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
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      taskList
    }
  }

  /* onClick, toggleItem maps through the taskList array looking for the matching id of the item that was clicked on and changes completed to the opposite of what it currently is */

  toggleItem = id => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  clearCompleted = completed => {
    this.setState({
      taskList: this.state.taskList.filter(item => item.completed === false)
    })
  }

  /* addItem takes in the new task as provided by the input, creates the new object setting the input to task, adding an id of the current date and setting completed to false, then sets state to the current taskList array, adding newItem at the end */
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      taskList: [...this.state.taskList, newItem]
    })
  }

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        </div>
        {/* TodoList renders the completed todo list based on current state. It expect state to come from taskList and the toggleItem function to "cross off" an item from the list */}
        <div>
        <TodoList 
          taskList = {this.state.taskList}
          toggleItem={this.toggleItem}
        />
        </div>
        <div>
        <TodoForm 
          addItem={this.addItem}
        />
        </div>
        <div>
            <button onClick={this.clearCompleted}>Clear Completed Items</button>
            </div>
      </div>
    );
  }
}

export default App;
