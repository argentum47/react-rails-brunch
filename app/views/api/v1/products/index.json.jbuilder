json.products @products do |product|
  json.id product.id
  json.name product.name
  json.sku product.sku
  json.price number_to_currency product.price
  json.active product.active
end

json.total_pages @total_pages
