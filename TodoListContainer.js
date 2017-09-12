this.state = {
  todos: [{
      text: 'Learn react native'
    },
    {
      text: 'Make a to-do app'
    }
  ]
}

addTodo(text) {
  this.setState({
    todos: this.state.todos.concat([{text: text}])
  });
}
