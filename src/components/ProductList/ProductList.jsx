import React, { Component } from 'react'
import _ from 'underscore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ProductList.scss'
import { sortByOptions, displayDefault } from './../../constants/sorting'
import Header from './../Header/Header'

export default class ProductList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: this.props.productData,
      sortBy: '',
      displayItems: displayDefault,
      gridCount: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  handleChange (e) {
    this.setState({
      sortBy: e.target.value,
      items: _.sortBy(this.state.items, e.target.value),
    })
  }

  loadMore () {
    this.setState({
      displayItems: this.state.displayItems + displayDefault,
    })
  }

  renderItems (product) {
    const priceInEuro = (product.price / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
    const basePrice = (product.price / product.size.replace('ML', '')).toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })
    const ratingStyle = `${product.rating}%`

    return (
      <div className="col col-md-4 col-lg-3 single-item"  key={product.id}>
        <div className="card text-center">
          <img className="card-img-top" src={product.image} alt={product.name}/>
          <div className="card-body">
            <strong className="card-text product-name">{product.name.replace(product.type, '')}</strong>
            <p className="card-text type">{product.type}</p>
            <span className="card-text price">ab {priceInEuro} / {product.size.toLowerCase()}</span>
            <p className="card-text base-price">
              <small>{basePrice} / 100ml</small>
            </p>
            <div className="ratings">
              <div className="empty-stars"/>
              <div className="full-stars" style={{width: ratingStyle}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const displayitems = this.state.items.slice(0, this.state.displayItems)
    const itemGrid = _.map(displayitems, (item, k) => {
      return this.renderItems(item, k)
    })

    const sortOptions = _.map(sortByOptions, (option, key) => {
      return (
        <option value={option} key={key}>{option}</option>
      )
    })

    const displayLoadMoreButton = this.state.displayItems <= this.state.items.length ? (
      <button type="button" className="btn btn-default"
              onClick={this.loadMore}
      >Load More</button>
    ) : null

    return (
      <div className="root-container">
        <Header/>
        <div className="container">
          <div className="sortBy">
            <select
              value={this.state.sortBy}
              onChange={this.handleChange}
            >
              {sortOptions}
            </select>
          </div>
          <div className="row">
            {itemGrid}
          </div>
          {displayLoadMoreButton}
        </div>
      </div>
    )
  }
}
