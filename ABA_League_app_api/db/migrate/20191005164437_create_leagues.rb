class CreateLeagues < ActiveRecord::Migration[6.0]
  def change
    create_table :leagues do |t|
      t.string :team
      t.string :player
      t.string :coach
      t.string :position

      t.timestamps
    end
  end
end
