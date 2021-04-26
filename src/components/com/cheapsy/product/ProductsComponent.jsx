import React, { Component } from 'react'

class ProductsComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: "Phone", description: "iPhone 12", price: 84000 },
                { id: 2, name: "Car", description: "Tata Nexon E", price: 1600000 }
            ]
        }
    }

    render() {

        return (

            <div>
                <h1>List Of Products</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.products.map(
                                product =>
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ProductsComponent;