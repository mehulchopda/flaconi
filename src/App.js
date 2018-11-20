import React, { Component } from 'react'
import './App.css'
import data from './data/productlist'
import ProductList from './components/ProductList/ProductList'

class App extends Component {
  render () {
    return (
      <div className="App">
        <ProductList productData={data}/>
      </div>
    )
  }
}

export default App
