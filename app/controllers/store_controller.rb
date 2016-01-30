class StoreController < ApplicationController

  def index
  end

  def load_items
    @items = Item.all
    render json: @items
  end

  def checkout
    @items_ordered = {}
    @total = 0
    @latest_order = current_user.boxes.last
    @latest_order.boxed_items.each do |boxed_item|
      item = Item.find(boxed_item.item_id)
      @items_ordered[item.name] = boxed_item.quantity
      @total += item.price
    end
    session[:total] = @total
  end

end
