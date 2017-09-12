constructor(props) {
  super(props);
  
  //ListViewで扱うデータ形式にする
  this.dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
  });
}
  
render() {
  return (
    <ListView
      dataSource={this.dataSource.cloneWithRows(this.props.todos)}
      renderRow={(todo) => <TodoListItem {...todo} />}
      renderSeparator={this.renderSeparator}
    />
  );
}
