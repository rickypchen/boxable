var Item = React.createClass({
  render: function(){
    return (
      <div className = "item col-sm-6 col-md-4">
        <div className = "itemImage thumbnail">
          <img src={this.props.image} />
        </div>
        <div class="caption">
          <h3>{this.props.name}</h3>
          <span>${this.props.price}</span>
          <p>{this.props.description}</p>
          <p>
            <a href="#" className="btn btn-primary" role="button">Add To Cart</a>
            <a href="#" className="btn btn-default" role="button">Remove From Cart</a></p>
        </div>
      </div>
      )
  }
})
