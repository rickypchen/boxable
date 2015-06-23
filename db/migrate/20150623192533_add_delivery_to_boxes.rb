class AddDeliveryToBoxes < ActiveRecord::Migration
  def change
    add_column :boxes, :first_name, :string
    add_column :boxes, :last_name, :string
    add_column :boxes, :street_address, :string
    add_column :boxes, :city, :string
    add_column :boxes, :state, :string
    add_column :boxes, :zipcode, :integer
  end
end
