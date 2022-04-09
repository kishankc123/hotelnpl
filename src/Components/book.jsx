import React from 'react'
import cin from '../Icon/cin.png'
import loc from '../Icon/loc.svg'
import gog from '../Icon/gog.svg'
import ppl from '../Icon/ppl.svg'


const Book = () => {

  const book = 
  {
    position:"absolute",
    borderStyle: "solid",
    height:"228px",
    width: "1016px",
    left: "224px",
    top: "80%",
    borderRadius: "20px",
    justifyContent: "center",



  }

  const main = {

    display: "flex",
    justifyContent: "center",
    position: "center"

  }

  const item = {

    display: "flex",
    justifycontent: "center",
    padding:"20px",
  }

  return (
    <div style ={book}> 

          <h2 class="ui header" font-family= "Karla"
          >Book Your stay...
            <p > 
                For affordable hotels and more
          </p>

          </h2>

        <div style={main}>

               <div style={item}>
                  
                  <div class="ui left icon input" >
                  <img src={loc}  alt="logo"/>

                      <input type="text"  placeholder=" Location ..." />
                  </div>
                </div>
                
                <div style={item}>
                <button class="massive ui button"> 
                    Check in
                    <img src={cin}  alt="check in"/> 
                </button>
                </div>


                <div style={item}>
                <button class="huge ui button"> 
                    Check in
                    <img src={cin}  alt="check out"/> 
                </button>
                </div>

                <div style={item}>
                <button >
                  Guest-room <img src={ppl}  alt="search"/> 
                  </button>
                </div>

                <div style={item}>
                <button class="ui brown button">
                  Search <img src={gog}  alt="search"/> 
                  </button>
                </div>

                

                
        </div>

    </div>
  )
}

export default Book