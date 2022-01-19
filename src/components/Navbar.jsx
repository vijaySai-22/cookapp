import React from 'react'
import {Link} from 'react-router-dom'

import '../App.css'

export default function List() {
    return (
        <div className='nav'>
            <h1>Cook - App</h1>
            <ul>
                <Link to="/"> <li>Home</li> </Link>
                <Link to="/recipes"> <li>Recipes</li> </Link>
            </ul>
        </div>
    )
}