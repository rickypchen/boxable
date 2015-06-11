class Box < ActiveRecord::Base
	has_many :boxed_items
	has_many :items, through: :boxed_items
end
