class StoreController < ApplicationController
  def index
  end

  def load_items
    @items = Item.all
    render json: @items
  end

  def checkout
  end



end
