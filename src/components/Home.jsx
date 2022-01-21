import React from 'react'

import '../App.css'
import TopCate from './TopCate'
import TopRecipe from './TopRecipe'
export default function Home() {
    
    return (
        <div style={{marginTop:'70px'}}>
            <TopCate/>
            <br />
            <hr />
            <TopRecipe/>
        </div>
    )
}
