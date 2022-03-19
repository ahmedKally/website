import arrowRight from "../img/right.png"
import arrowLeft from "../img/left.png"
import rightBtn from "../img/rightBtn.png"
import industry from "../img/industry.svg"
import heart from "../img/heartbeat.svg"
import travel from "../img/travel.svg"
import house from "../img/house.svg"
import tree from "../img/Path61389.svg"
import energy from "../img/Path61391.svg"
import './Slider.scss'
import SmallCard from "../SmallCard/SmallCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase ,faHouse,faTree,faIndustry, faBolt, faHeart, faHeartPulse } from '@fortawesome/free-solid-svg-icons'

const Slider = (props) => {

    const cardImages =[industry,heart,travel,house,energy];
    const cardDesc=['Tourism','Agriculture','Real Estate','Industrials','Energy','Healthcare'];
    let tree ="fa-light fa-tree"
    const icons =[faSuitcase,faHouse,faTree,faIndustry,faBolt,faHeartPulse]
    let desc =null;
            return (
                
                    <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-2 cricle-contain border-right">
                                        <div className='circle'>
                                             <div className="circle-content">
                                             <img src={arrowLeft}/>
                                                <span>1</span>
                                            <img  src={arrowRight} />
                                             </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10  slider-text-contain">
                                        <div className="container pr-0">
                                            <div className="row">
                                                <div className="col-lg-12 slide-text-contain">
                                                    <div>
                                                        <span>Mission</span>
                                                        <h1>your bussiness <br /> expansion expectation</h1>
                                                    </div>
                                                    <div className="btn-more">
                                                          <button>more <br /> <img width="17" src={rightBtn} /></button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 pr-0">
                                                        <div className="greenDiv container-fluid">
                                                            <div className="row">
                                                            <div className="col-lg-10">
                                                            <span className="recent">RECENT INVESTMENT ANNOUNCEMENTS</span>
                                                            <h3>Navigating the <br /> Opportunities of Africa’s <br /> Logistics Sector</h3>
                                                            </div>
                                                        <div className="btn-more col-lg-2">
                                                          <button>more <br /> <img width="17" src={rightBtn} /></button>
                                                        </div>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-7 pl-0">
                                                        <div className="container-fluid yellowDiv">
                                                            <div className="row">
                                                                <div className="col-lg-8 invest-contain">
                                                                    <span>Investment Sectors</span>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="btn-row text-center" > 
                                                                        <span>More</span> 
                                                                         <button><img width="17" src={rightBtn} /></button>
                                                                    </div>
                                                                </div>
                                                                
                                                               
                                                                
                                                                {icons.map((icon,idx) => <SmallCard key={idx} icon={icon} cardTitle={cardDesc[idx]} />)}
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                
            )
}
export default Slider;