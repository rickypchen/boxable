$(document).ready(function(){
  $(".stripe-button-el").on("click", function(){
    console.log('here');
        var data = $('#delivery_info').serialize();
        $.ajax({
          url: "/deliver",
          type: "POST",
          data: data
        }).success(function(response){
        })
      })
})
