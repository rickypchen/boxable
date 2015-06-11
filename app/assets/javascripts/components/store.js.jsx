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
  getInitialState: function(){
    return ({quantity: 0, items: [], cart: ['happy','day']})
  },
  componentDidMount: function(){
    this.loadStore();
  },
  render: function(){
    console.log(this.state)
    console.log(this.state.items)
    console.log(this.state.quantity)
    console.log(this.state.cart)
    return (
      <div className="store">
        <div className="shelf">{
          this.state.items.map(function(item) {
            return (
             <Item key={item.id}>
                {item.name}
                {item.price}
                <img src={item.img_name} />
             </Item>
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