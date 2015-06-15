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
        <div className = "itemImage thumbnail">
          <img src={this.props.image} />
        </div>
        <div className="caption">
          <h3>{this.props.name}</h3>
          <span>${this.props.price}</span>
          <p>{this.props.description}</p>
          <p>
            <a onClick={this.addItem} href="#" className="btn btn-primary" role="button">Add To Cart</a>
            <a onClick={this.removeItem} href="#" className="btn btn-default" role="button">Remove From Cart</a></p>
        </div>
      </div>
      )
  }
})
