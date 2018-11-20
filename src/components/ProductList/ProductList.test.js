import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList'
import data from '../../data/productlist'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductList productData={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
