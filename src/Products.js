import React from 'react';
import Product from './Product';
import './Products.css';

const filterByCategory = (categoryId, products) => {
  if (categoryId === '0') return products.sort((a, b) => a.name < b.name ? -1 : 1);
  const sortedProducts = products.filter((product) => {
    const allIds = []
    product.categories.forEach((category) => allIds.push(category.categoryId))
    return allIds.includes(categoryId)
  })
  return sortedProducts.sort((a, b) => a.name < b.name ? -1 : 1);
}

const Products = ({ products, categoryId }) => {
  const sortedProducts = filterByCategory(categoryId, products)
  return (
    <div className="Products-grid">
      {sortedProducts.map(product => <Product key={product.variantId} product={product} />)}
    </div>
  );
};

export default Products;
