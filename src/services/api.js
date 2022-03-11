export async function getCategories() {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(query) {
  // const urlAll = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const urlAll = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(urlAll);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
