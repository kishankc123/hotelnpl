import React from 'react'
import loginbg from '../Images/loginbg.svg'
import logo from'../logo/logosmall.svg'
import fb from'../Icon/fb.svg'
import gl from'../Icon/gl.svg'



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
        borderRadius: "21.12px"        
    }

    const text ={

        top:"30px",
        left:"30px",
        position: "absolute",
        fontFamily: 'Karla',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "38.016px",
        lineHeight: "44px",
        alignItems: "center",
        color: "#000000",
        letterSpacing: "0em",
        textAlign: "left",
        blend: "Pass through"


    }

    const email ={

        position: "absolute",
        width: "435px",
        height: "58px",
        left: "30px",
        top: "101px",
        right: "30px",
        borderRadius: "10.56px" ,
        border: "0.8448px solid #000000"

    }

    const password={
        position: "absolute",
        width: "435px",
        height: "58px",
        left: "30px",
        top: "184px",
        right: "30px",
        borderRadius: "10.56px" ,
        border: "0.8448px solid #000000"

    }

    const terms ={
        position: "absolute",
        width: "435px",
        height: "58px",
        left: "30px",
        top: "280px",
        right: "30px",
        fontFamily: 'Karla',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "19px",
        lineHeight: "130%",
        alignItems: "center",
        color: "#000000",
        textAlign: "center"       
        
    }

    const button={
        position: "absolute",
        width: "435px",
        height: "58px",
        left: "30px",
        top: "380px",
        right: "30px",
        borderRadius: "10.56px" ,
        border: "0.8448px solid #000000",
        background:"#D8F1E4",
        fontFamily: 'Karla',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "25px",
        fontColor:"#FFFFFF"
    }

    const forgot={
        position: "absolute",
        width: "435px",
        height: "73px",
        left: "30px",
        top: "460px",
        right: "30px",
        fontFamily: 'Karla',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "19px",
        lineHeight: "130%",
        alignItems: "center",
        textAlign: "center"       

        }

    const icon1={
        position: "absolute",
        left: "215px",
        top: "540px",
        right: "260pxpx"
    }

    const icon2={
        position: "absolute",
        left: "260px",
        top: "540px",
        right: "260px"


    }

    const cc={
        position: "absolute",
        width: "435px",
        height: "58px",
        left: "30px",
        top: "600px",
        right: "30px",
        fontFamily: 'Karla',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "13px",
        lineHeight: "17px",
        alignItems: "center",
        color: "#000000",
        alignItems: "center",
        textAlign: "center"       

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
                <div>
                <form>
                    <input
                     type={'email'} name="name" placeholder='Enter email' style={email}/>
                    <input 
                    type={'password'} name="password" placeholder='Enter password' style={password}/>

                    <div style={terms} > <t/>OR<br/>
                    By signing in, I agree to the Hotel Nepal Inc <label fontColor='blue'>Terms and Conditions </label>
                    and <label >Privacy Statement.</label>
                    </div>

                    <button style={button}>Sign in</button>
                </form>

                <div style={forgot}>
                    Forgot password?<br/>
                    Don't have an account? Create one
                    or continue with
                </div>

                <img src={fb}  alt="logo" style={icon1}/>  
                <img src={gl}  alt="logo" style={icon2}/>  

                <div style={cc}>
                ©2022 HotelsNepal Inc. All rights reserved.
                </div>


                </div>
            </div>
        </div> 


    </div>
  )
}

export default Travellerlogin;