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
                    <h2>Cart Summary</h2>
                    <table className="summary">
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                      {cartArray}
                    </table>
                  </div>
	      	<div className='checkout-container'>
	      	<button type="button" className="btn btn-warning" id="checkout-btn">Checkout</button>
      	        </div>
	      </div>
    );
  }
});

