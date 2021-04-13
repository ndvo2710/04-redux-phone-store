import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { productProps } = this.props;

        return (
            <div className="card text-center">
                <img className="card-img-top" src={productProps.img} alt={productProps.img} style={{ width: 300, height: 300 }} />
                <div className="card-body text-center">
                    <h4 className="card-title">{productProps.name}</h4>
                    <p className="card-text">$ {productProps.price.toLocaleString()} VND</p>
                    <button className="btn btn-success" onClick={() => this.props.addToCart(productProps)}>Add to cart</button>
                </div>
            </div>

        )
    }
}