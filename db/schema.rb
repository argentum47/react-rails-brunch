# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160623190214) do

  create_table "products", force: :cascade do |t|
    t.string   "name",       limit: 255,                                        null: false
    t.string   "sku",        limit: 255,                                        null: false
    t.decimal  "price",                  precision: 12, scale: 2, default: 0.0
    t.boolean  "active"
    t.datetime "created_at",                                                    null: false
    t.datetime "updated_at",                                                    null: false
  end

  add_index "products", ["name"], name: "index_products_on_name", using: :btree
  add_index "products", ["sku"], name: "index_products_on_sku", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "remote_ip",  limit: 255
    t.string "session_id", limit: 255
  end

  add_index "users", ["remote_ip"], name: "index_users_on_remote_ip", using: :btree
  add_index "users", ["session_id"], name: "index_users_on_session_id", using: :btree

end
