import Slider from "../components/Banner/Banner";
import Map from "../components/Map/Map";
import Header from "../components/Header/Header"
import LatestNews from "../components/LatestNews/LatestNews";

const Home = ()=>{
    return(<>
        <div className="bg">
           <Header/>
            <Slider />
            </div>
            <Map />
            <LatestNews />
        </>
    )
}
export default Home;