module Paginate
  extend ActiveSupport::Concern

  module ClassMethods
    attr_accessor :per_page

    def paginate(options)
      options = options.dup
      pagenum = pagenum = options.fetch(:page) { raise ArgumentError, ":page parameter required" }
      options.delete(:page)
      per_page = options.delete(:per_page) || self.per_page

      limit(per_page).offset(pagenum)
    end
  end
end
