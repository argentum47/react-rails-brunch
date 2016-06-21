class Product < ActiveRecord::Base
  include Paginate
  self.per_page = 20
end
