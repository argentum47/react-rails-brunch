const BASE_URL = "/api/v1"

export function all(page = 0) {
  return $.ajax({
    url: `${BASE_URL}/products.json`,
    data: { page }
  })
}
