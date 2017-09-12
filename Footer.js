onAddPress() {
  // TodoListContainerのaddTodoメソッドにtextを渡して実行
  this.props.addTodo(this.state.text);

  // Todo追加後はTextInputを空にする
  this.setState({
    text: ''
  });
}