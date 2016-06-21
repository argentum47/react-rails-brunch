const BASE_URL = "/api/v1"

export function all(page = 0, per_page) {
  return $.ajax({
    url: `${BASE_URL}/products.json`,
    data: { page, per_page }
  })
}
