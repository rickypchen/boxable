var Cart = React.createClass({
	render: function(){
    var cartArray = [];
    var cart = this.props.cart
    for (var key in cart) {
      if (cart[key]["quantity"] > 0)
        cartArray.push(<CartItem price={cart[key]["itemInfo"]["price"]} name={cart[key]["itemInfo"]["name"]} quantity={cart[key]["quantity"]} />)
      
    }
    console.log(cartArray);
    console.log(this.props.cart);

    return (
	      <div className="cart" >
	      	<div className="inventory">
  	      	<p>
  	      		Your have no items selected
  	      	</p>
            <ul>
              {cartArray}
            </ul>
	      	</div>
	      	<div className='chekcout-container'>
	      	<button type="button" className="btn btn-default checkout-btn">Checkout</button>
	        </div>
	      </div>
				
    
      )
  }
})

