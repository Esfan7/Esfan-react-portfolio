
import Footer from "./Footer"
import Nav from "./Nav";
import profileImg from "../assets/placeholder-image-person-jpg.jpg"
export default function About({setScreen}){

    return <div>
        <Nav title="About"  setScreen={setScreen} />
        <div className="row">
            <div className="left">
                <img src={profileImg}/>
            </div>
        <div className="right">
            
        </div>
        </div>
        <Footer/>
    </div>
   
}
