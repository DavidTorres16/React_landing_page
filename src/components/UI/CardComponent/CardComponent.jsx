import React from 'react'
import './CardComponentStyles.css' 

export default function CardComponent(props) {

    const {CardImage} = props
    console.log(CardImage)

    return (
        <div className="CardBody">
            <img src={CardImage} alt="" className="CardImage"/>
            <div className="CardText">
                <div>
                    <h1>Hola Mundo</h1>
                </div>
                <div>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut libero sunt voluptates quos sint ducimus praesentium laborum, eum aliquid explicabo modi architecto perferendis atque?</h5>
                </div>
            </div>
        </div>
    )
}
