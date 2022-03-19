import Lists from '../Lists/Lists';
import './Map.scss';
import map from "../img/map.png";
import rightBtn from "../img/rightBtn.png"
const Map = ()=>{

    const countries =['Nigeria','Ethiopia','Egypt','Tanzania','Kenya','Uganda','Algeria', 'Sudan'];
    const sectors =[ 'Real estate, Tourism',' Agriculture, Healthtech',' Real estate, Tourism', 'Fintech', 'Healthtech , Real estate, Agriculture, Healthtech', 'Tourism'];
    const Opportunities=['446', '557', '586', '226', '287', '227', '27', '775'];
    return (
        <div className="mapBg">
            <div className="container-fluid bgGreen">
                <div className="row">
                    <div className="col-lg-2 border-right title-contain">
                        <h1>Opportunities</h1>
                    </div>
                    <div className="col-lg-10 mapContain">
                        <div className="container">
                            <div className="row">
                                <Lists title="Country" item ={countries.map((country,index)=><li key={index}>{country}</li>)} />
                                <Lists title="Sectors" item ={sectors.map((sector,index)=><li key={index}>{sector}</li>)} />
                                <Lists title="Opportunities" item ={Opportunities.map((Opportunity,index)=><li key={index}>{Opportunity}</li>)} />
                                <div className="col-lg-6">
                                    <div className="mapImgContain">
                                            <img src={map} />
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                                                    <div className="btn-row " > 
                                                                        <span className='text-white'>More</span> 
                                                                         <button><img width="17" src={rightBtn} /></button>
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

export default Map;