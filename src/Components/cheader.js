import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'  //For importing Link

//exporting to the tags in header.jsx page

export const Nav = styled.div` 
position:sticky;
background: #D8F1E4CC;
height: 64px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1 rem;
top: 0;
z-index:1;
@media screen and (max-width:9600px){
    transition: 0.8s all ease;
}
`;
export const Navbarcontainer = styled.div
`
display:flex;
justify-content: space-around;
height: 50px;
z-index: 0;
width: 100%
padding: 0 24px;
max-width: 1100px;

`;

export const NavMenu=styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align: center;
position:relative;
margin-right: -600px;
font-color: #000000;
color: #000000;


@media screen and (max-width : 768px)
{
    display: none;
}
`;

export const NavItem =styled.li
` 
padding-right:25px;
padding-left:25px;
padding-top:10px;
height: 80px;
font-color: #000000;
color: #000000;
font-family: Karla;


`;

export const NavLinks = styled(LinkR)
`
color: #fff;
display: flex;
align-items: Center;
text: decoration:none;
padding:0 1 rem;
height: 100%
cursor:pointer;
font-family: Karla;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
font-color: #000000;
color: #000000;

&.active
{
    border-bottom: 3px solid #01bf71;
}
`;

export const Navlogo = styled(LinkR)
`
align-items:center;
color: #000;
justify:self: flex-start;
cursor: pointer;
font-size: 1.6rem;
font-family: Times New Roman;
display: inline-block;
align-items:Center;
margin-left: 100px;
font-weight: bold;
text-decoration: none;
position:absolute;
left:10px;
top: 15px;
`;

export const Box = styled.button
`
position: absolute;
background: #5A3D2B;
height: 35px;
width: 80px;
left: 575px;
top: 0px;
border-radius: 5px;


`;


export const Menu = styled.menu
`
position: relative;
top: 0px;
left: 0px;


`;
