import logo from '../img/logo.png';
import darkMode from '../img/contrast.svg';
import search from '../img/search.svg'
import './Header.scss'
import menu from "../img/menu-right.svg"
import xMarkfrom from "../img/x-mark.png";
import { useState } from 'react';
import { Navbar, NavbarBrand,NavDropdown,Nav  } from 'react-bootstrap';
import facebook from "../img/face.svg"
import twitter from "../img/twitter.svg"
import youtube from "../img/youtube.svg"

const Header= () =>{
    const [Menue, setMenue] = useState("displayblock");
    const [close ,setclose] = useState("displayNone");
    
    const [bg,setBg] =useState("")
    let Links =['Why Invest','About','Industries','Programs & Incentives','Locations','News']

    let toggelMenue= ()=>{
        setMenue("displayNone")
        setBg("bgMenue");
        setclose("displayblock")
    }
   let toggelClose = ()=>{
       setMenue("displayblock")
       setclose("displayNone")
        setBg("");
       
   }

    return(
        <div className="container-fluid border-bottom">
            <div className={bg +" row"} >
                <div className="col-lg-2 logo-contain border-right">
                    <img className='logo' src={logo} />
                </div>
                <div className="col-lg-6 darkMode">
                    <div className='darkMode-contain'>
                       <img src={darkMode} />
                       <span>A</span>
                    </div>
                </div>
                <div className="col-lg-3 border-left border-right">
                    <div className='searchContain'>
                        <img src={search} />
                        <span>en</span>
                        <button>Sign in</button>
                    </div>
                </div>
                <div className="col-lg-1 menue-contain">
                        <img className={Menue}  onClick={toggelMenue} src={menu} />
                        <img width="80" className={close} onClick={toggelClose} src={xMarkfrom} />
                </div>
                
            </div>
            <div className={close+ " navbar col-lg-12"}>
                
                <Nav >
            <ul className='nav-list'>
                {Links.map((link=>
                    <li><Nav.Link>{link}</Nav.Link> </li>
                ))}
                
               <li className='menu-follow'>
               <div className='social-media col-1g-12'>
                    <span>Follow us</span>
                    <div>
                            <img src={facebook} />
                            <img src={twitter}/>
                            <img src={youtube} />
                    </div>
                </div>
               </li>
               {/* <li><div className='meueFooter c'>
                   <span> smskalmckaln</span>
                   <span> smskalmckaln</span>
               </div></li> */}
           <div>
               
           </div>
            </ul>
           
            </Nav>
            
            </div>
           
            
        </div>
    )
}

export default Header;