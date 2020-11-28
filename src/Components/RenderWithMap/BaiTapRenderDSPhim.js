import React, { Component } from 'react'
import data from '../../data/data.json'
// import style from './BTPhim.module.css'
export default class BaiTapRenderDSPhim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }

    renderPhimtWithMap = () => {
        const jsxPhim = this.state.mangPhim.map((phim, index) => {
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    {/* <img className={`card-img-top ${style.hinhAnh}`}  src={phim.hinhAnh} alt={phim.hinhAnh} /> */}
                    <img style={{
                        width: 'auto',
                        height: '200px'
                    }} className={`card-img-top`} src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title" style={{ height: '60px' }}>
                            {phim.tenPhim.length > 50 ? <span> {phim.tenPhim.substr(0, 50)}...</span> : <span>{phim.tenPhim}</span>}</h4>
                        <p className="card-text">{phim.moTa.length > 150 ? <span>{phim.moTa.substr(0, 150)}...
                </span> : <span>{phim.moTa}</span>}</p>
                    </div>
                </div>
            </div>;
        });
        return jsxPhim;
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-danger">Danh sach phim</h3>
                <div className="row">
                    {this.renderPhimtWithMap()}
                </div>
            </div>
        )
    }
}
