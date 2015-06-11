var Item = React.createClass({
  render: function(){
    return (
      <div className = "item">
        <div className = "itemImage">
          <img src={this.props.image} />
        </div>
        <span>{this.props.name}</span>
        <span>${this.props.price}</span>
      </div>
      )
  }
})


