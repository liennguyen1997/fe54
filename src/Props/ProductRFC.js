import React from 'react'

//React function component nhan props laf tham so dau vao cua ham component

export default function ProductRFC(props) {
    //ESS
    //let name = props.name;
    //let price = props.price;
    //ES6
    let {name,price} = props;
    return (
        <div class="card text-dark">
            <img class="card-img-top" src="https://picsum.photos/200/200" alt="123" />
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">{price}</p>
            </div>
        </div>
    )
}
