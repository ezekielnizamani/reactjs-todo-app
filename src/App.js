import React, { Component } from 'react';
import './App.css';
import { InputBox } from './components/input/Input.component'
import { TodoList } from './components/todo-list/Todo-list.component'
import { AddButton } from './components/buttons/Add-button.component'
class App extends Component {
  constructor() {
    super();


    this.state = {
      newItem: '',
      list: []

    }


  }
  handelChange = (e) => {
    this.setState({ newItem: e.target.value })
  }

  handelClick = () => {

    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
    }
    //  copy of current list item

    const list = [...this.state.list]

    list.push(newItem);


    // update the state with new list and reset form
    this.setState({
      list,
      })

  }
  // delete Item
  deleteItem = (id) => {

    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id)

    this.setState({ list: updatedList});


  }
  render() {

    return (
      <div className="App">
        <h1>Todo App</h1>
        <div className="container">
          <InputBox placeholder='Add something...' handelChange={this.handelChange}> </InputBox>
          <AddButton handelClick={this.handelClick} />

          <TodoList list={this.state.list} deleteItem={this.deleteItem}></TodoList>


        </div>
      </div>
    );


  }
}

export default App;
