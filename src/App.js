import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'shopping in mall',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'walk in garden',
        completed: true
      }
    ]
  };
  markComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    console.log('delete');
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  AddTodo = title => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <Header />
        <Route
          path="/"
          exact
          render={props => (
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo} />
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
