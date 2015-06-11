var Cart = React.createClass({
	render: function(){
    return (
	      <div className="cart" >
	      	<div className="inventory">
	      	<p>
	      		Your have no items selected
	      	</p>
	      	<ul> {
	      		this.props.cart.map(function(item){
	      			return (
	      				<CartItem key={item.id}> {item}</CartItem>
	      				)
	      		})
	      	}</ul>
	      	</div>
	      	<div className='chekcout-container'>
	      	<button type="button" className="btn btn-default checkout-btn">Checkout</button>
	        </div>
	      </div>
				
      )
  }
})

