import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';
import Products from './Products';
import products from './products.json';
import Filters from './Filters';

const getAndSortFilterOptions = (products) => {
  const filterNameList = []
  const filterOptions = [{ name: "All Products", id: '0' }]
  products.forEach((product) => {
    product.categories.forEach((category) => {
      const { name, categoryId } = category
      const categoryObj = { name, id: categoryId }
      if (!filterNameList.includes(name)) {
        filterOptions.push(categoryObj)
        filterNameList.push(name)
      }
    })
  })
  return filterOptions.sort((a, b) => a.name < b.name ? -1 : 1);
}

const App = () => {
  const [categoryId, setCategoryId] = useState("0");

  return (
    <div className="app">
      <div className="App-row">
        <Filters setCategoryId={setCategoryId} filterOptions={getAndSortFilterOptions(products)} />
      </div>
      <div className="App-row">
        <Products products={products} categoryId={categoryId} />
      </div>
    </div>
  )
};

export default App;
