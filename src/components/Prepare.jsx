import React,{useState,useEffect} from 'react';

export default function Prepare(props) {
    const [item,setItem]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.setId}`)
        .then(res=>res.json())
        .then(json=>setItem(json.meals))
    },[props.setId])
    return <div>
        {
            (props.setShow)?
            <div>
                <h1>Recipe Details</h1>
                {
                    item.map(
                        (e)=>
                        <div key={Math.random()}>
                            <div>
                                <img src={e.strMealThumb} alt="none" height='200px' />
                                <h2>{e.strMeal}</h2>
                                <ul>
                                    {((e.strIngredient1)!=='' && (e.strIngredient1)!==null)?<li>{e.strIngredient1} - {e.strMeasure1}</li>:null}
                                    {((e.strIngredient2)!=='' && (e.strIngredient2)!==null)?<li>{e.strIngredient2} - {e.strMeasure2}</li>:null}
                                    {((e.strIngredient3)!=='' && (e.strIngredient3)!==null)?<li>{e.strIngredient3} - {e.strMeasure3}</li>:null}
                                    {((e.strIngredient4)!=='' && (e.strIngredient4)!==null)?<li>{e.strIngredient4} - {e.strMeasure4}</li>:null}
                                    {((e.strIngredient5)!=='' && (e.strIngredient5)!==null)?<li>{e.strIngredient5} - {e.strMeasure5}</li>:null}
                                    {((e.strIngredient6)!=='' && (e.strIngredient6)!==null)?<li>{e.strIngredient6} - {e.strMeasure6}</li>:null}
                                    {((e.strIngredient7)!=='' && (e.strIngredient7)!==null)?<li>{e.strIngredient7} - {e.strMeasure7}</li>:null}
                                    {((e.strIngredient8)!=='' && (e.strIngredient8)!==null)?<li>{e.strIngredient8} - {e.strMeasure8}</li>:null}
                                    {((e.strIngredient9)!=='' && (e.strIngredient9)!==null)?<li>{e.strIngredient9} - {e.strMeasure9}</li>:null}
                                    {((e.strIngredient10)!=='' && (e.strIngredient10)!==null)?<li>{e.strIngredient10} - {e.strMeasure10}</li>:null}
                                    {((e.strIngredient11)!=='' && (e.strIngredient11)!==null)?<li>{e.strIngredient11} - {e.strMeasure11}</li>:null}
                                    {((e.strIngredient12)!=='' && (e.strIngredient12)!==null)?<li>{e.strIngredient12} - {e.strMeasure12}</li>:null}
                                    {((e.strIngredient13)!=='' && (e.strIngredient13)!==null)?<li>{e.strIngredient13} - {e.strMeasure13}</li>:null}
                                    {((e.strIngredient14)!=='' && (e.strIngredient14)!==null)?<li>{e.strIngredient14} - {e.strMeasure14}</li>:null}
                                    {((e.strIngredient15)!=='' && (e.strIngredient15)!==null)?<li>{e.strIngredient15} - {e.strMeasure15}</li>:null}
                                    {((e.strIngredient16)!=='' && (e.strIngredient16)!==null)?<li>{e.strIngredient16} - {e.strMeasure16}</li>:null}
                                    {((e.strIngredient17)!=='' && (e.strIngredient17)!==null)?<li>{e.strIngredient17} - {e.strMeasure17}</li>:null}
                                    {((e.strIngredient18)!=='' && (e.strIngredient18)!==null)?<li>{e.strIngredient18} - {e.strMeasure18}</li>:null}
                                    {((e.strIngredient19)!=='' && (e.strIngredient19)!==null)?<li>{e.strIngredient19} - {e.strMeasure19}</li>:null}
                                    {((e.strIngredient20)!=='' && (e.strIngredient20)!==null)?<li>{e.strIngredient20} - {e.strMeasure20}</li>:null}                            
                                </ul>
                            </div>
                            <div>
                                <p>{e.strInstructions}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            :null
        } 
     </div>;
}
