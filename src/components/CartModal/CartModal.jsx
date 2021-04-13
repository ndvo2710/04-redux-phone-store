import React, { Component } from 'react'

export default class CartModal extends Component {
    renderCart = () => {
        const { cart } = this.props;
        return cart.map((cartItem, index) => {
            return <tr key={index}>
                <td>{cartItem.id}</td>
                <td><img style={{ width: 35, height: 35 }} src={cartItem.img} alt={cartItem.img} /></td>
                <td>{cartItem.name}</td>
                <td>
                    <button className="btn btn-success" onClick={() => { this.props.changeQuantity(cartItem.id, 1) }}>+</button>
                    {cartItem.quantity.toLocaleString()}
                    <button className="btn btn-success" onClick={() => { this.props.changeQuantity(cartItem.id, -1) }}>-</button>
                </td>
                <td>{cartItem.price.toLocaleString()} VND</td>
                <td>{(cartItem.quantity * cartItem.price).toLocaleString()} VND</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.removeItem(cartItem.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        })
    }

    calculateTotalCost = () => {
        const { cart } = this.props;
        return cart.reduce((totalCost, cartItem, index) => {
            return totalCost += cartItem.quantity * cartItem.price;
        }, 0).toLocaleString();
    }

    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div style={{ minWidth: 1000 }} className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Total Cost:</td>
                                            <td>{this.calculateTotalCost()}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
