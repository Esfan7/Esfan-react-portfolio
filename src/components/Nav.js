import { useNavigate } from "react-router-dom"

export default function Nav({title}){
    const navigate = useNavigate();

    return  <header >
    <h1>{title}</h1>



<nav>
    <ul class >
        <a onClick={()=> navigate("/about")}>About</a>
        <a onClick={()=> navigate("/resume")}>Resume</a>
        <a onClick={()=> navigate("/contact")}>Contact</a>
        <a onClick={()=> navigate("/portfolio")}>Portfolio</a>
    </ul>
</nav>
</header>
}