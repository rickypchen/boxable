var Item = React.createClass({
  render: function(){
    return (
      <div className = "item">{this.props.children}</div>
      )
  }
})