import React, { Component } from 'react'
import CartModal from '../CartModal/CartModal'
import ProductList from '../ProductList/ProductList'

export default class PhoneStore extends Component {
    state = {
        cart: []
    }

    addToCart = (product) => {
        console.log(product);
        let newCartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            img: product.img
        }

        // Check if item exists in cart
        const index = this.state.cart.findIndex(cartItem => cartItem.id === newCartItem.id);
        if (index !== -1) {
            // Item Found -> quantity increase
            this.state.cart[index].quantity += 1;
        } else {
            // Not Found => Push new item to cart
            this.state.cart.push(newCartItem);
        }
        this.setState({
            cart: this.state.cart
        });
    }

    changeQuantity = (id, number) => {
        let cart = [...this.state.cart];
        let index = cart.findIndex(cartItem => cartItem.id === id);
        if (index !== -1) {
            if (cart[index].quantity <= 1 && number === -1) {
                alert('must be at least 1!');
                return;
            }
            cart[index].quantity += number;
        }
        this.setState({
            cart: cart
        })
    }

    removeItem = (id) => {
        this.setState({
            cart: this.state.cart.filter(cartItem => cartItem.id !== id)
        })
    }

    getNumberOfCartItems = () => {
        return this.state.cart.reduce((numberOfItems, cartItem, index) => {
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
                <CartModal cart={this.state.cart} changeQuantity={this.changeQuantity} removeItem={this.removeItem} />
                <ProductList addToCart={this.addToCart} />

            </div>
        )
    }
}
