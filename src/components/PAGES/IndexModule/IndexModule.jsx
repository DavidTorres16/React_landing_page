import React from 'react'
import './IndexModuleStyles.css'
import CardComponent from '../../UI/CardComponent/CardComponent'
import Paragraph from '../../UI/Paragraph/Paragraph'
import CardImage from '../../../assets/images/CardImage.jpg'
import CardImage2 from '../../../assets/images/Eva.jpg'
import CardImage3 from '../../../assets/images/computer.jpg'
import Footer from '../../LAYOUT/Footer/Footer'


export default function IndexModule() {

    const imageArr = [CardImage,CardImage2,CardImage3]

    return (
        <div className="IndexPageMain">
            <Paragraph/>
            <div className="cardsDiv">
                {
                    imageArr.map(image =>{
                        return <CardComponent CardImage={image}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}
