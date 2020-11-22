import React, { Component } from 'react'

export default class DemoState extends Component {

    //state: là thuộc tính cơ bản của component => dùng đển quản lý nguồn dữ liệu thay đổi 
    //trên giao diện khi người dùng thao tác (click, change, blur,..)
    state = {
        isLogin: false
    }

    // isLogin = false;
    userName = 'CHU';

    renderContent = () => {
        if (this.state.isLogin) {
            return <p>
                Hello ! {this.userName}
            </p>
        }

        return <button onClick={() => {
            this.handleLogin();
        }} className="btn btn-info">Dang nhap</button>
    }

    handleLogin = () => {

        // Không được thay đổi state trực tiếp mà phải thông qua phương thức this.setstate
        //setState(): là phương thức có sẵn của lớp đối tượng component => dùng để thay đổi
        // giá trị trong this.state đồng thời gọi lại hàm render.

        // const newState = {
        //     isLogin: true
        // }
        // this.setState(newState);

        this.setState({
            isLogin: true
        });
    }

    render() {
        return (
            <div className="container pt-4">
                <h3>If else react</h3>
                {/* {this.isLogin ? <p>Hello {this.userName} </p> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
