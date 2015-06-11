class BoxedItem < ActiveRecord::Base
	belongs_to :item
	belongs_to :box
end
