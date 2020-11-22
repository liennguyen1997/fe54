import React, { Component } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import Laptop from './Laptop'
import Promotopn from './Promotopn'
import SmartPhone from './SmartPhone'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header />
                <Carousel />
                <SmartPhone/>
                <Laptop />
                <Promotopn />
            </div>
        )
    }
}
