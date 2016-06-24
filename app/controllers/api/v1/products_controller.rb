class Api::V1::ProductsController < ApiController
  def index
    @products = if params[:search]
                  Product.where("name LIKE (?)", "#{params[:search]}%")
                else
                  Product
                end

    @products = @products.paginate(page: params[:page], per_page: params[:per_page] || Product.per_page)
    @total_pages = Product.count / Product.per_page
  end
end
