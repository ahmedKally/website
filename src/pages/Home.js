import Slider from "../components/Banner/Banner";
import Map from "../components/Map/Map";
import Header from "../components/Header/Header"

const Home = ()=>{
    return(
        <div className="bg">
            <Header  />
            <Slider />
            <Map />
        </div>
    )
}
export default Home;