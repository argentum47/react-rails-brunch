const BASE_URL = "/api/v1"

export function getProductsPaginated(page = 0, search) {
  return $.ajax({
    url: `${BASE_URL}/products.json`,
    data: (search ? { page, search } : { page })
  })
}

export function searchProducts(search, page = 0) {
  return $.ajax({
    url: `${BASE_URL}/products.json`,
    data: { search, page }
  })
}
