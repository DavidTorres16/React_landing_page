import React from 'react'
import { Link } from 'react-router-dom'
import './LinksStyles.css'

export default function Links(props) {

    const {URL,Name} = props

    return (
        <div>
            <li>
                <Link to={URL} className="link">{Name}</Link>
            </li>
        </div>
    )
}
