import { useNavigate } from "react-router-dom"

export default function Nav({title, setScreen}){
 

    return  <header >
    <h1>{title}</h1>



<nav>
    <ul class >
        <a onClick={()=> setScreen("about")}>About</a>
        <a onClick={()=> setScreen("resume")}>Resume</a>
        <a onClick={()=> setScreen("contact")}>Contact</a>
        <a onClick={()=> setScreen("portfolio")}>Portfolio</a>
    </ul>
</nav>
</header>
}