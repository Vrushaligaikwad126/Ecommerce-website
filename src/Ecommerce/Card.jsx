import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item,handleClick}) =>{
    const[open,setOpen]=useState(false)

    const {title,price,image,description,rating,id} = item
    return(
       
        <div className='card'>
            
         <Link to={`./about/${id}`}><img src={image} alt="" height={'150px'} width={'200px'}/>
         </Link>
            <h4>{title}</h4>
            <div>Price: ${price}</div>
            <div>Rating : {rating.rate}⭐</div>
            <button onClick={()=>handleClick(item)}>Add Cart</button>
            <button onClick={()=>setOpen(!open)}>Read More</button>
            {open &&(
                <div>
                    <p>{description}</p>
                    <button onClick={()=>setOpen(!open)}>Close</button>
                </div>
            )}

        </div>
    )
}
export default Card