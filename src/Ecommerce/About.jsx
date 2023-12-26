import React from 'react'
import { useParams } from 'react-router'
import { Tilt } from 'react-tilt'
import './About.css'

const About = ({Data,handleClick}) => {
    

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
    const{aboutId}=useParams()
    const data=Data.find((data)=>data.id==parseInt(aboutId))
  return (
    <div className='About'>
        <div className='right'>
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <img src={data.image}></img>
        </Tilt>
           

        </div>
        <div className='left'>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.rating.rate}⭐</p>
        < button onClick={()=>handleClick(data)}>Add Cart</button>

        </div>
    </div>
  )
}

export default About