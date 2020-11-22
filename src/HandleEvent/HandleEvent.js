import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert('he loo');
    }

    showInfo = (info) => {
        alert(info);
    }

    render() {
        const title = "cybersoft";
        return (
            <div className="container">
                <h1>Handle Event</h1>
                <button onClick={this.showMess}>Click me</button>

                <button onClick={() => {
                    alert(`hello ${title}`);

                }}> Show mess</button>

               <button onClick = {() => {
                   this.showInfo('hello fe54')
               }}>Show info</button>

               {/*Cách sư dụng hàm bind - ít dùng*/}
               
            </div>
        )
    }
}
