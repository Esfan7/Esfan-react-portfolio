export default function  Project({img, url, title}){

    return  <div >
    <a href={url} ><img src={img} /></a>
    <div className="banner">{title}</div>
</div>
}