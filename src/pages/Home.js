import Slider from "../compontents/Banner/Banner";
import Map from "../compontents/Map/Map";
import Navbar from "../compontents/navbar/NavBar"

const Home = ()=>{
    return(
        <div className="bg">
            <Navbar  />
            <Slider />
            <Map />
        </div>
    )
}
export default Home;