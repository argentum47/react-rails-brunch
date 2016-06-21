class Api::V1::ProductsController < ApplicationController
  def index
    @products = Product.paginate(page: params[:page])
  end
end
