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
  },
  getInitialState: function(){
    return ({quantity: 0, items: [], cart: {}})
  },
  componentDidMount: function(){
    this.loadStore();
  },
  render: function(){
    // console.log(this.state)
    // console.log(this.state.items)
    // console.log(this.state.quantity)
    // console.log(this.state.cart)
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
          <Cart cart={this.state.cart} />
        </div>
      </div>
      );
  }
});