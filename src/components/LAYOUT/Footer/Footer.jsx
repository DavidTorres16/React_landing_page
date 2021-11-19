import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="footerContentInfo">
                    <div>
                        <h1>David Mauricio Torres</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia laudantium, dignissimos perspiciatis illum.</p>
                    </div>
                    <div>
                        <h1>2021</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem odit impedit, fuga quibusdam numquam amet quam. Quos, illum cumque sapiente placeat, dolorum ipsum suscipit blanditiis eligendi sunt ea aspernatur.</p>
                    </div>
                </div>
                <div className="footerContentSocial">
                    <ul className="socialNav">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
