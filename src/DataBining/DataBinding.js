import React from 'react'

export default function DataBinding() {
    // Binding biến đối tượng
    const title = 'cybersoft';
    const imgSrc = 'https://picsum.photos/200/200';

    const sinhVien = {
        maSV: '00001',
        tenSinhVien: 'Nguyen AAA',
        hinhAnh: 'https://picsum.photos/200'
    }

    //Binding hàm
    const re = () => {
        //Giá trị phải trả về 1 chuối, số, jsx, ( 1 đoạn code html được bao phủ bởi 1 thẻ)
        return 
        <div>
            <h3>Hình Ảnh</h3>
            <img src={sinhVien.hinhAnh} />
            
        </div>
    }
    return (

        <div className="container">
            <h3>Data</h3>
            <p id="title" className="display-4">{title}</p>

            <img src={imgSrc} width="200" heught="200" alt="123.jpg" />
            <input className="form-control w-25" value={title} />
            <hr />
            <h3>Thong tin sinh vien</h3>
            <div className="card" style = {{width:200,height:200}}>
                <img className="card-img-top" src={sinhVien.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                    <p className="card-text">Ma sinh vien: {sinhVien.maSV}</p>
                </div>
            </div>
            {re()}
        </div>
       
    )
}