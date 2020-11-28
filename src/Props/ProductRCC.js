import React, { Component } from 'react'

export default class ProductRCC extends Component {

    //this.props: là thuộc tính có sẵn của react class component cha truyền vào
    //this.props thuộc tính ko được gán lại giá trị mới.
    render() {

        //this.props.sanPham = {};
        let { sanPham } = this.props;
        //let {maSp,tenSp,giaBan,hinhAnh} = this.props.sanPham;
        
        return (
            <div class="card text-left">
                <img class="card-img-top" src={sanPham.hinhAnh} alt="123" />
                <div class="card-body">
                    <h4 class="card-title">{sanPham.tenSP}</h4>
        <p class="card-text">{this.props.sanPham.giaBan}</p>
                </div>
            </div>
        )
    }
}
