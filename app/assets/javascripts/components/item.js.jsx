var Item = React.createClass({
  addItem: function(event){
    event.preventDefault();
    this.props.storeSelf.addToCart(this.props.name);
  },
  removeItem: function(event){
    event.preventDefault();
    this.props.storeSelf.removeFromCart(this.props.name);

  },
  render: function(){
    return (
      <div className = "item col-sm-6 col-md-4">
        <h3>{this.props.name}</h3>
        <div className = "itemImage thumbnail">
          <p className="item-description">{this.props.description}</p>
          <img src={this.props.image} />
          <span className="price">${this.props.price}</span>
        </div>
        <div className="caption">
          
          <p>
            <a onClick={this.addItem} href="#" className="store-btn btn btn-primary" role="button">Add To Cart</a>
            <a onClick={this.removeItem} href="#" className="store-btn btn btn-default" role="button">Remove From Cart</a>
          </p>
        </div>
      </div>
      )
  }
})
