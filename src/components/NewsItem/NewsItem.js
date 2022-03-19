import newsPic from "../img/isto.jpg"
import "./NewsItem.css"
import share from "../img/share.svg"
import favorite from "../img/favorit.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Item =()=>{

    return(
        <div className="item-contain container-fluid">
            <div className="row">
              <div className="img-contain col-lg-12">
                    <img className="w-100" src={newsPic}/>
              </div>
              <div className="col-lg-12">
              <h4 >hi news hi news hi news hi news hi news hi news</h4>
              </div>
              <div className="co-lg-12 news-icon-contain">
                    <span className="date">Jan ,31,2022</span>
                    
                    
                    <img src={share} />
                    <img src={favorite}/>
                    
              </div>
              
         </div>
         </div>
    )
}
export default Item;