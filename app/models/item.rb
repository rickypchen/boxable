class Item < ActiveRecord::Base
	has_many :boxed_items
	has_many :boxes, through: :boxed_items
end
