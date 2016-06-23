class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :remote_ip, index: true
      t.string  :session_id, index: true
    end
  end
end
