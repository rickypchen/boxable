var Cart = React.createClass({
	render: function(){
    return (
	      <div className="cart" >
	      	<div className="inventory">
	      	<p>
	      		Your have no items selected
	      	</p>
	      	
	      	</div>
	      	<div className='chekcout-container'>
	      	<button type="button" className="btn btn-default checkout-btn">Checkout</button>
	        </div>
	      </div>
				
    
      )
  }
})

