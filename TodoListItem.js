render() {
  return (
    <View style={styles.todo}>
      <CheckBox
        isChecked={this.props.complete}
        onClick={()=>this.onClick()}
      />
      <Text style={[styles.text, this.state.isChecked ? styles.isTextDisabled : null]}>
        {this.props.text}
      </Text>
    </View>
  );
}
