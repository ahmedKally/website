import fly from "../img/fly.jpeg";
import share from "../img/share.svg"
import favorite from "../img/favorit.svg"
import './NewsDesc.css'
const NewsDesc = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ">
                        <img className="plane"  src={fly} />
                    </div>
                    <div className="col-lg-6 desc-data">
                            
                                <div className="desc-title">
                                        <h1>African investment in Aviation Industry [Business Africa]</h1>
                                        <div className=" news-icon-contain">
                    <span className="date">Jan ,31,2022</span>
                    <img src={share} />
                    <img src={favorite}/>
                    
              </div>
                                </div>
                                <p>
                                Major African firms have invested in Africa in order to revive the aviation sector. This is the case of Ethiopian Airlines which owns shares in Chadia Airways and Mozambique Airlines. More recently, a South African company signed a $25 million memorandum w
                                Major African firms have invested in Africa in order to revive the aviation sector. This is the case of Ethiopian Airlines which owns shares in Chadia Airways and Mozambique Airlines. More recently, a South African company signed a $25 million memorandum w

                                </p>
                          
                    </div>
                    <div className="col-lg-12 full-desc">
                            <h5>Mali: An unprecedented financial crisis</h5>
                            <p>- Mali: An unprecedented financial crisis Mali is caught in the middle of economic and diplomatic sanctions decreed by ECOWAS, which are having a major impact on its economy. According to experts, with the its assets frozen at the Central Bank of West Afri - Mali: An unprecedented financial crisis
Mali is caught in the middle of economic and diplomatic sanctions decreed by ECOWAS, which are having a major impact on its economy. According to experts, with the its assets frozen at the Central Bank of West Afri

                            </p>
                    </div>
                    <div className="col-lg-12 full-desc">
                            <h5>Mali: An unprecedented financial crisis</h5>
                            <p>- Mali: An unprecedented financial crisis Mali is caught in the middle of economic and diplomatic sanctions decreed by ECOWAS, which are having a major impact on its economy. According to experts, with the its assets frozen at the Central Bank of West Afri - Mali: An unprecedented financial crisis
Mali is caught in the middle of economic and diplomatic sanctions decreed by ECOWAS, which are having a major impact on its economy. According to experts, with the its assets frozen at the Central Bank of West Afri

                            </p>
                    </div>

                   
                    
                </div>
            </div>
        )
}

export default NewsDesc ;