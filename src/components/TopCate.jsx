import React,{useState,useEffect} from 'react';

export default function TopCate() {
    const [topCate,setTopCate] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>res.json())
        .then(json=>setTopCate(json.categories))
    },[])
    console.log(topCate)
    return <div>
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
    </div>;
}
