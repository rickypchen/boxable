class BoxesController < ApplicationController

	protect_from_forgery :except => [:create]

	def create
		box = Box.create
		p "Here are the params: #{params}"
		params["arr"].each do |key, sub_arr|
			box.boxed_items << BoxedItem.create(item_id: sub_arr[0], quantity: sub_arr[1])
		end

		box.update_attributes(user_id: params["user"])
		# render json: [200]
	end

	def deliver
		delivery_info = params["box"]
		box = Box.find(delivery_info["order_id"].to_i)
		box.update_attributes(first_name: delivery_info["first_name"], last_name: delivery_info["last_name"], street_address: delivery_info["address"], city: delivery_info["city"], state: delivery_info["state"], zipcode: delivery_info["zipcode"])
		redirect_to checkout_path
	end


end
