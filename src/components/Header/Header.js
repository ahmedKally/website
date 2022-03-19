import logo from '../img/logo.png';
import darkMode from '../img/contrast.svg';
import search from '../img/search.svg'
import './Header.scss'
import menu from "../img/menu-right.svg"
const Header= () =>{
    return(
        <div className="container-fluid border-bottom">
            <div className="row ">
                <div className="col-lg-2 border-right">
                    <img className='logo' src={logo} />
                </div>
                <div className="col-lg-6">
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
                <div className="col-lg-1">
                <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" className="navigation__button">
            <div className="navigation__icon"></div>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="#section-about" className="navigation__link"><span>01</span>About Natours</a></li>
                <li className="navigation__item"><a href="#section-features" className="navigation__link"><span>02</span>Your benefits</a></li>
                <li className="navigation__item"><a href="#section-tours" className="navigation__link"><span>03</span>Popular tours</a></li>
                <li className="navigation__item"><a href="#section-stories" className="navigation__link"><span>04</span>Stories</a></li>
                <li className="navigation__item"><a href="#section-book" className="navigation__link"><span>05</span>Book now</a></li>
            </ul>
        </nav>
    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;