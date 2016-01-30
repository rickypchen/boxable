var Cart = React.createClass({
  createInventory: function(){
    var inventoryArray = [];
    var cart = this.props.cart;
    for (var key in cart){
      inventoryArray.push([cart[key]["itemInfo"]["id"],cart[key]["quantity"]])
    }
    return inventoryArray;
  },
  checkoutClickHandler: function(){
    var that = this;

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

      $(".sign-up-form").on("submit", function(e){
        e.preventDefault();

        var data = $(this).serialize();
        $.ajax({
          url: "/users",
          type: "POST",
          data: data
        })
        .success(function(response){
          that.props.storeSelf.state.signedIn = true;
          console.log(response.responseText);
          if (response[0] === "good") {

            var itemIdAndQuantity = that.createInventory();
            var user_id = response[1];
            $.ajax({
              url: "/box",
              type: "post",
              data: {"arr": itemIdAndQuantity, "user": user_id}
            })
            .success(function(response){
              console.log("success");
            })
            .fail(function(){
              console.log("failed to create a box for user");
            })

            location.href = "http://localhost:3000/checkout";

          } else {
            $("#registration_errors").text("");
            for (var i = 0; i< response.length; i++){
              $("#registration_errors").append(
                "<li>" + response[i] + "</li>"
                )
            }
          }
        })
        .fail(function(response){
          console.log("fail HERE")
          console.log(response)
        })
      });

      $(".sign-in-form").on("submit", function(e){
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
          url: "/users/sign_in",
          type: "POST",
          data: data
        })
        .success(function(response){
          that.props.storeSelf.state.signedIn = true;
          console.log(response)
          if (response[0] === "good") {
            var itemIdAndQuantity = that.createInventory();
            var user_id = response[1];
            $.ajax({
              url: "/box",
              type: "post",
              data: {"arr": itemIdAndQuantity, "user": user_id}
            })
            .success(function(response){
              console.log("success");
            })
            .fail(function(){
              console.log("fail");
            })
          location.href = "http://localhost:3000/checkout";
          } else {
            $("#sign_in_errors").text("");
            for (var i = 0; i< response.length; i++){
              $("#sign_in_errors").append(
                "<li>" + response[i] + "</li>"
                );
            }
          }
        })
        .fail(function(response){
          console.log(response);
          console.log("failed")

        })
      });
    // }
  },
  render: function(){
    var cartArray = [];
    var cart = this.props.cart;
    console.log(cart)
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

