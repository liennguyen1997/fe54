import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: "./img/car/products/red-car.jpg" // gia tri mac dinh cuar satte
    }

    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 p-3" >
                        {/*Hinh anh cua xe*/}
                        <img className="w-100" src={this.state.imgSrc} />
                    </div>

                    <div className="col-6" >
                        {/*mau cua xe*/}
                        <div class="card my-3">
                            <div className="card-header bg-success text-white">
                                Exterior color
                            </div>

                            <div class="card-body ">
                                <div className="row mt-3 p-2">
                                    <div className="col-2">
                                        <img style={{ cursor: "pointer"}} onClick= {() => {
                                            this.changeColor('black')
                                        }} src="./img/car/icons/icon-black.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3 className="">Black Color</h3>
                                    </div>
                                </div>

                                <div className="row mt-3 p-2">
                                    <div className="col-2">
                                    <img style={{ cursor: "pointer"}} onClick= {() => {
                                            this.changeColor('red')
                                        }} src="./img/car/icons/icon-red.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3 className="">Red Color</h3>
                                    </div>
                                </div>

                                <div className="row mt-3 p-2">
                                    <div className="col-2">
                                    <img style={{ cursor: "pointer"}} onClick= {() => {
                                            this.changeColor('silver')
                                        }} src="./img/car/icons/icon-silver.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3 className="">Sliver Color</h3>
                                    </div>
                                </div>

                                <div className="row mt-3 p-2">
                                    <div className="col-2">
                                    <img style={{ cursor: "pointer"}} onClick= {() => {
                                            this.changeColor('steel')
                                        }} src="./img/car/icons/icon-steel.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3 className="">Steel Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
