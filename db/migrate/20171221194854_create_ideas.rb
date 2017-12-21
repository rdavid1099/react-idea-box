class CreateIdeas < ActiveRecord::Migration[5.0]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :description
      t.integer :likes
      t.integer :dislikes

      t.timestamps
    end
  end
end
