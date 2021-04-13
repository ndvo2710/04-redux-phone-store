import React, { Component } from 'react'
import { connect } from 'react-redux';
import CartModal from '../CartModal/CartModal'
import ProductList from '../ProductList/ProductList'

class PhoneStore extends Component {

    getNumberOfCartItems = () => {
        return this.props.cart.reduce((numberOfItems, cartItem, index) => {
            return numberOfItems += cartItem.quantity
        }, 0)
    }

    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center">Phone Store</h3>
                <div className="text-right">
                    <span data-toggle="modal" data-target="#modelId" style={{ width: 17, cursor: 'pointer' }}>
                        <i className="fa fa-cart mr-5"><i className="fa fa-cart-arrow-down"></i>({this.getNumberOfCartItems()}) Cart</i>
                    </span>
                </div>
                <CartModal />
                <ProductList />

            </div>
        )
    }
}

// Convert redux state to props
const mapStateToProps = state => {
    return {
        cart: state.stateCart.cart
    }
}

export default connect(mapStateToProps)(PhoneStore);