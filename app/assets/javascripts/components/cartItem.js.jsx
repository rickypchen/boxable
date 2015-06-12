var CartItem = React.createClass({
	render: function(){
    return (
      	
      <li className = "item">
      	{this.props.name}
      	{this.props.price}
      	{this.props.quantity}
      </li>

      )
  }
})