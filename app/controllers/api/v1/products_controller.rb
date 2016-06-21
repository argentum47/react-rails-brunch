class Api::V1::ProductsController < ApplicationController
  def index
    @products = Product.paginate(page: params[:page], per_page: params[:per_page] || Product.per_page)
    @total_pages = Product.count / Product.per_page
  end
end
