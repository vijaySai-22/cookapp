import React,{ useState,useEffect } from 'react'

export default function Recipes() {
    const [recipe, setRecipe] = useState("");
    const [recipeData, setRecipeData] = useState([])
    const handler = e => {
        setRecipe(e.target.value)
    }
    useEffect(()=>{
        try {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipe}`)
            .then(res=>res.json())
            .then(json=>setRecipeData(json.meals))
        } catch (error) {
            console.log(error)
        }
    },[recipe])
    return (
        <div>
            <h1>Recipes</h1>
            <input id='search' type='text' placeholder='Search ingredient' value={recipe} onChange={handler}/>
            <ul className='tags'>
                <li onClick={()=>setRecipe('chicken')}>Chicken</li>
                <li onClick={()=>setRecipe('egg')}>Egg</li>
                <li onClick={()=>setRecipe('beef')}>Beef</li>
                <li onClick={()=>setRecipe('sugar')}>Sugar</li>
            </ul>
            <div>
                <div className='blocks'>
                    {
                        (recipeData)?
                        recipeData.slice(0,15).map(
                            (e)=>
                                <div key={Math.random()} className='cards'>
                                    <img src={e.strMealThumb} alt={Math.random()}></img>
                                    <h2>{e.strMeal}</h2>
                                </div>
                        )
                        :<h1>none</h1>
                    }
                </div>
            </div>
        </div>
    )
}
