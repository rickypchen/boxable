var Cart = React.createClass({
	render: function(){
    return (
      <div className = "cart">
      	<p>
      		Your have no items selected
      	</p>
      	<p> {
      		this.props.cart.map(function(item){
      			return (
      				<CartItem> {item}</CartItem>
      				)
      		})
      	}</p>
				
      	<button type="button" class="btn btn-default">Checkout</button>
      </div>
      )
  }
})

