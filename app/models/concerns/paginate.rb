module Paginate
  extend ActiveSupport::Concern

  module ClassMethods
    attr_accessor :per_page

    def paginate(options)
      options = options.dup
      pagenum = pagenum = options.fetch(:page) { raise ArgumentError, ":page parameter required" }
      options.delete(:page)
      per_page = (options.delete(:per_page) || self.per_page).to_i
      pagenum = pagenum.to_i

      limit(per_page).offset(pagenum * per_page)
    end
  end
end
