var Cart = React.createClass({
  checkoutClickHandler: function(){
    if (this.props.signedIn) {
      window.location.replace("http://localhost:3000/checkout");
    } else {
      $(".modal-overlay").show();
      $(".close").on("click", function(){
        $(".modal-overlay").hide();
      });

      $("#sign-up").on("click", function(e){
        e.preventDefault();
        $(".sign-in-container").hide();
        $(".sign-up-container").show();
      })

      $("#sign-in").on("click", function(e){
        e.preventDefault();
        $(".sign-in-container").show();
        $(".sign-up-container").hide();
      })

      $(".sign-in-form").on("submit", function(){
        var data = $(this).serialize();
        $.ajax({
          url: "/users/sign_in",
          type: "POST",
          data: data
        })
        .done(function(response){
          console.log("success")
        })
        .fail(function(response){
          console.log("failed")
        })
      });
    }
  },
  render: function(){
    var cartArray = [];
    var cart = this.props.cart;
    var totalCheckoutPrice = 0;
    for (var key in cart) {
      if (cart[key]["quantity"] > 0)
        cartArray.push(<CartItem price={cart[key]["itemInfo"]["price"]} name={cart[key]["itemInfo"]["name"]} quantity={cart[key]["quantity"]} />)
        totalCheckoutPrice += cart[key]["itemInfo"]["price"] * cart[key]["quantity"]
    }

    console.log(cartArray);
    console.log(this.props.cart);

    return (
	      <div className="cart" >
                  <div className="inventory">
                    <h2>Box Summary</h2>
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
                  <h3>Total: ${totalCheckoutPrice.toFixed(2)}</h3>
	      	<button type="button" onClick={this.checkoutClickHandler} className="btn btn-warning" id="checkout-btn">Checkout</button>
      	        </div>
	      </div>
    );
  }
});

