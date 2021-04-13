import React, { Component } from 'react'
import CartModal from '../CartModal/CartModal'
import ProductList from '../ProductList/ProductList'

export default class PhoneStore extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center">Phone Store</h3>
                <div className="text-right">
                    <span data-toggle="modal" data-target="#modelId" style={{ width: 17, cursor: 'pointer' }}>
                        <i className="fa fa-cart mr-5"><i className="fa fa-cart-arrow-down"></i>(0) Cart</i>
                    </span>
                </div>
                <CartModal />
                <ProductList />

            </div>


        )
    }
}
