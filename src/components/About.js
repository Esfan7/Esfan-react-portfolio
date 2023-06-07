
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
            Hello, my name is Esfan I am a dynamic and talented professional currently perusing Bachelor degree of Science, major in Business Administration; 
actively seeking Sales Associate position to leverage diverse experience in Warehouse Packaging and Customer Service 
as well as robust academic qualifications across highly regulated and deadline-driven environments. Below is my github and linkedin profiles.
        </div>
        </div>
        <Footer/>
    </div>
   
}
