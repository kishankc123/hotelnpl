import React from 'react'
import loginbg from '../Images/loginbg.svg'
import logo from'../logo/logosmall.svg'


const Travellerlogin = () => {

    const image = {
        width: "auto%",
        objectFit: "cover"
    }

    const rlogo={

        position: "absolute",
        width: "257.89px",
        height: "175px",
        left: "66px",
        top: "340px"
    }

    const brect = {
        position: "absolute",
        width: "924px",
        height: "855.36px",
        left: "285px",
        top: "84px",

        background: "#FBF8F1",
        boxShadow: "-3.168px -3.168px 5.28px rgba(0, 0, 0, 0.2), 3.168px 3.168px 5.28px rgba(0, 0, 0, 0.2), 6.336px 6.336px 15.84px rgba(0, 0, 0, 0.25), -6.336px -6.336px 15.84px rgba(255, 255, 255, 0.8)",
        borderRadius: "21.12px"
    }

    const srect = {
        position: "absolute",
        width: "496.32px",
        height: "673.73px",
        left: "360px",
        top: "118px",
        background: "#ffff",
        border: "solid",
        borderRadius: "21.12px"        
    }

    const text ={

        top:"30px",
        left:"27px",
        position: "absolute",
        fontFamily: 'Karla',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "38.016px",
        lineHeight: "44px",
        alignItems: "center",
        color: "#000000"

    }

  return (
    <div>
        <img src={loginbg}  alt="Main image" style={image}/> 
        <div style={brect}>
            <img src={logo}  alt="logo" style={rlogo}/>  
            <div style={srect}>
                <div style={text}>
                        Sign in
                </div>

            </div>
        </div> 


    </div>
  )
}

export default Travellerlogin;