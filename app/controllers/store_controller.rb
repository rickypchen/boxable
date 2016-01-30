class StoreController < ApplicationController

  def index
  end

  def load_items
    @items = Item.all
    render json: @items
  end

  def checkout
    @items_ordered = {}
    @latest_order = current_user.boxes.last
    @latest_order.boxed_items.each do |boxed_item|
      @items_ordered[Item.find(boxed_item.item_id).name] = boxed_item.quantity
    end
  end

end
