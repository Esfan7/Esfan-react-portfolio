import Nav from "./Nav";
import Footer from "./Footer"
import Project  from "./Project";
import img1 from "../assets/17143.jpg"
import img2 from "../assets/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg"
import img3 from "../assets/360_F_322315214_MJ5mAznvvTpXBeXBLh3bVwxC1bB4RbNd.jpg"
import img4 from "../assets/istockphoto-1289411982-612x612.jpg"
import img5 from "../assets/programmingevolution.jpg"


export default function Portfolio({setScreen}){

    return <><Nav title="Portfolio"  setScreen={setScreen} />
    <section className="hero-banner">
        <div>
            <h2>Esfandiar Behbehani</h2>
        </div>
    </section>
    <main className="container">
        <section id="about-div" className="flex" >
            <div className="section-title left">
                <h2 className="title" >About me</h2>
            </div>
            <div className="right">
                <p id="About me paragraph"> Hello, my name is Esfandiar Behbehani. I have a passion for coding and down below is a few of my projects including this one from the uci bootcamp className I am currently enrolled in.
                    Enjoy
                    </p>
                    </div>
        </section>
        <section id="WorkPage">
            <div className="section-title left" >
                <h2 className="title" >Work</h2>
            </div>
           <div id="topdiv" className="right">
                <div className="portfolio">
                   
                </div>
                <div className="grid">
                    <Project url="https://github.com/Esfan7/Code-Quiz" img ={img1} title="Code-Quiz"/>
                    <Project url="https://github.com/Esfan7/Password-Generator" img={img2} title="Password-Generator" />
                    <Project url="https://github.com/Esfan7/Planner" img={img3} title="Planner" />
                    <Project url="https://github.com/Esfan7/Note-taker" img={img4} title="Note-taker" />
                    <Project url="https://github.com/Esfan7/Can-you-README" img={img5} title="Can-you-README" />
                    <Project url="https://github.com/Esfan7/What-the-Weather" img={img5} title="What-the-Weather" />
           
                  
                 
                  
                     
                 
                </div>



           </div>
          
        </section>
        <section id="contact" className="flex">
            <div className="section-title left" >
                <h2 className="title"  >Contact</h2>
              
            </div>
            <div className="right">
          
               <ul id="horizontal-list">
                <li><strong>Email:</strong> <a href="#">Eafanbeh@gmail.com</a></li>
                <li><strong>Github:</strong> <a href="#">https://github.com/Esfan7</a></li>
                <li><strong>Phone Number:</strong> <a href="#">1-444-444-4444</a></li>
                </ul>
            </div>
        </section>
        <Footer/>
        </main>
    </>
}
