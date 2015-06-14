var store = React.createClass({
  loadStore: function(){
    $.ajax({
      url: '/store/load_items',
      dataType: 'json',
      type: 'get',
      success: function(items){
        this.setState({items: items});
      }.bind(this),
      error: function(data){
        console.log("failure");
      }
    })
  },
  countTotalQuantity: function(){
    var current_total = 0;
    for (itemName in this.state.cart) {
      current_total += this.state.cart[itemName]["quantity"];
    }
    return current_total;
  },
  addToCart: function(itemName){
    var items = this.state.items;
    var index = items.map(function(item) {return item.name; }).indexOf(itemName);


    if (this.state.cart[itemName]) {
      this.state.cart[itemName]["quantity"] += 1;
      console.log(this.state.cart)
    } else {
      this.state.cart[itemName] = {};
      this.state.cart[itemName]["itemInfo"] = items[index];
      this.state.cart[itemName]["quantity"] = 1;
    }
    this.setState({});
    
    $("#badge").html(this.countTotalQuantity());
  },
  removeFromCart: function(itemName){
    var items = this.state.items;
    var index = items.map(function(item) {
          return item.name; }).indexOf(itemName);
    if (this.state.cart[itemName] !== null) {
      if (this.state.cart[itemName]["quantity"] !== null && this.state.cart[itemName]["quantity"] > 0) {
        this.state.cart[itemName]["quantity"] -= 1;
      }
    }
    this.setState({})
    console.log(this.state.cart);
    $("#badge").html(this.countTotalQuantity());
  },
  getInitialState: function(){
    return ({quantity: 0, items: [], cart: {}})
  },
  componentDidMount: function(){
    this.loadStore();
  },
  render: function(){

    var self = this;
    return (
      <div className="store">
        <div className="shelf row">{
          this.state.items.map(function(item) {
            return (
             <Item storeSelf={self} key={item.id} name={item.name} price={item.price} image={item.img_name} description={item.description} />
            )
        })
      }
        </div>
        <div className="cart">
          <Cart signedIn={this.props.signedIn} cart={this.state.cart} />
        </div>
      </div>
      );
  }
});