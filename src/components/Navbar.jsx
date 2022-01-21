import React from 'react'
import {Link} from 'react-router-dom'

import '../App.css'

export default function List() {
    return (
        <div className='nav'>
            <ul >
                <li className='title'>Cook App</li>
                <li className='tabs'><Link to="/">Home </Link></li>
                <li className='tabs'><Link to="/recipes">Recipes</Link></li>
            </ul>
        </div>
    )
}