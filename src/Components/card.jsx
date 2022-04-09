import React from 'react'
import htl1 from '../Images/htl1.svg'

const Card = () => {

    const box1 = 
    {
      position:"absolute",  
      borderStyle: "solid",
      height:"400px",
      width: "550px",
      left: "100px",
      top: "120%",
      borderRadius: "20px",
      justifyContent: "center",  
      }

      const box2 = 
    {
      position:"absolute",  
      borderStyle: "solid",
      height:"400px",
      width: "550px",
      left: "700px",
      top: "120%",
      borderRadius: "20px",
      justifyContent: "center",  
      }

    const text={
      textDecoration:" line-through"
    }

  return (
    <div>
        <div style={box1}>
        <img src={htl1}  alt="Main image"/>  
        <div>The Bandipur inn </div>
            <label style={text}> old price</label>
            <label> New price</label>
            <div>
            <button> Book Now</button>
            </div>
        </div>

        <div style={box2}>
        <img src={htl1}  alt="Main image"/>  
        <div>The Bandipur inn </div>
            <label style={text}> old price</label>
            <label> New price</label>
            <div>
            <button> Book Now</button>
            </div>
        </div>
        
    </div>

    
  )
}

export default Card;