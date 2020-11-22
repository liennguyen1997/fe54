import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    sinhVien = {
        ma: '0001',
        ten: 'Nguyen Van',
        hinhAnh: 'https://picsum.photos/200/'
    }
    render() {

        const title = "fjjsj";
        const renderTitle = () => {
            return <p className="text-danger" >
                {title}
            </p>
        };

        return (
            < div className="container" >
                <h1>Rjhjdh</h1>
                <p>Tieeu de: {title}</p>
                {renderTitle()}
                <h3>Thoomg tin sinh vien</h3>
                <ul>
                    <li>Ma sinh vien:{this.sinhVien.ma}</li>
                    <li>Ten sinh vien:{this.sinhVien.ten}</li>
                    <li> <img src = {this.sinhVien.hinhAnh} width = "200" height = "200" /></li>
                </ul>
            </ div>
        )

    }

}
