class CreateBoxedItems < ActiveRecord::Migration
  def change
    create_table :boxed_items do |t|
    	t.integer  :box_id
    	t.integer  :item_id
    	t.integer  :quantity

      t.timestamps null: false
    end
  end
end
