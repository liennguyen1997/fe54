import React, { Component } from 'react'
import Promotopn from '../Components/BaiTapLayout/Promotopn'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sach san pham</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name = "Samsung" price= "1,000$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name = "Iphone" price= "3,000$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name = "Xioami" price= "1,500$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name = "Sony" price= "2,000$" />
                    </div>
                </div>
            </div>
        )
    }
}
