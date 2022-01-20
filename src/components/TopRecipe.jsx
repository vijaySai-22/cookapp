import React,{useState,useEffect} from 'react';
import RecipeDetails from './RecipeDetails';

export default function TopRecipe() {
    const [topItem,setTopItem] = useState([])
    const [recipeShow,setRecipeShow] = useState(false)
    const [recipeId,setRecipeId]=useState(undefined)
    
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
    return <div>
        <h1>Top Recipes</h1>
        <div className='topReci'>
            {
                (topItem.length>5)?
                topItem.map(
                    (e)=>
                    <div className='card' key={Math.random()} onClick={()=>{setRecipeShow(true); setRecipeId(e.idMeal)}}>
                        <img src={e.strMealThumb} alt={String(Math.random)}></img>
                        <h2>{e.strMeal}</h2>
                    </div>
                    
                )
            :<h1>Loading...</h1>
            }
        </div>
        <RecipeDetails setShow={recipeShow} setId={recipeId}/>
    </div>;
}
