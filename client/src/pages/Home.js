import Navbar from "../components/navbar";
import HomeIntro from "../components/homeIntro";

function Home() {
    return ( 
        <div>
            <Navbar />
            <div style={{margin: "30px", color: "white"}}>
                <h1>Fitacademy</h1>
            </div>
            <HomeIntro />
        </div>
     );
}

export default Home;