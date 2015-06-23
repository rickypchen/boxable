class BoxesController < ApplicationController

	protect_from_forgery :except => [:create]

	def create
		box = Box.create

		params["arr"].each do |key, sub_arr|
			box.boxed_items << BoxedItem.create(item_id: sub_arr[0], quantity: sub_arr[1])
		end

		box.update_attributes(user_id: 11) # once session id is set we can fix user_id

		render json: [200]
	end

	

end
