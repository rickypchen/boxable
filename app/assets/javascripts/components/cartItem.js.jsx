var CartItem = React.createClass({
	render: function(){
    return (

      <tr className = "item">
      	<td>{this.props.name}</td>
      	<td>${this.props.price}</td>
      	<td>{this.props.quantity}</td>
      </tr>

      )
  }
})