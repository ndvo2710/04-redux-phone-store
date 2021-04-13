import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default class ProductList extends Component {
    products = [
        { "id": 1, "name": "VinSmart Live", "display": "AMOLED, 6.2, Full HD+", "os": "Android 9.0 (Pie)", "frontCamera": "20 MP", "rearCamera": "Main 48 MP & Others 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "price": 5700000, "img": "./img/vsphone.jpg" },
        { "id": 2, "name": "Meizu 16Xs", "display": "AMOLED, FHD+ 2232 x 1080 pixels", "os": "Android 9.0 (Pie); Flyme", "frontCamera": "20 MP", "rearCamera": "Main 48 MP & Others 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "price": 7600000, "img": "./img/meizuphone.jpg" },
        { "id": 3, "name": "Iphone XS Max", "display": "OLED, 6.5, 1242 x 2688 Pixels", "os": "iOS 12", "rearCamera": "Main 12 MP & Others 12 MP", "frontCamera": "7 MP", "ram": "4 GB", "rom": "64 GB", "price": 27000000, "img": "./img/applephone.jpg" }
    ]

    renderProducts = () => {
        return this.products.map((prod, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItem productProps={prod} />
                </div>
            )
        })
    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
