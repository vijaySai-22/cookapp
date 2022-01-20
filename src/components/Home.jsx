import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import '../App.css'
export default function Home() {
    const [topCate,setTopCate] = useState([])
    const [topItem,setTopItem] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>res.json())
        .then(json=>setTopCate(json.categories))
    },[])
    console.log(topCate)
    let list=[]
    let id=[52772,52767,53059,52949,53022,52967,53014,52947,52925,52945]
    useEffect(()=>{
        async function fetchData(){
            for (let i=0; i<10; i++) {
                const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id[i]}`)
                const json=await res.json()
                list.push(json.meals[0])
            }
            console.log(list)
            setTopItem(list)
        }
        fetchData()
    },[])
    console.log(topItem)
    return (
        <div style={{marginTop:'70px'}}>

            <h1>Top Categories</h1>
            <div className='cate'>
            {
                (topCate)?
                    topCate.map(
                        (e)=>
                        <div className='card' key={Math.random()}>
                            <img src={e.strCategoryThumb} alt={String(Math.random)}></img>
                            <h2>{e.strCategory}</h2>
                        </div>
                        
                    )
                :<h1>none</h1>
            }
            </div>
            <h1>Top Recipes</h1>
            <div className='topReci'>
            {
                (topItem.length>5)?
                topItem.map(
                    (e)=>
                    <Link to="/prepare" id={e.idMeal} key={Math.random()}> 
                        <div className='card' >
                            <img src={e.strMealThumb} alt={String(Math.random)}></img>
                            <h2>{e.strMeal}</h2>
                        </div>
                    </Link>
                    
                )
            :<h1>Loading...</h1>
            }
            </div>
        </div>
    )
}
