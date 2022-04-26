const openImg = (id)=>{
    let thumb = document.getElementById(id).src;
    document.getElementById("thumb").src = thumb;
    document.getElementsByClassName("thumb")[0].style = "z-index: 100;";
}
const close = ()=>{
    document.getElementById("thumb").src = "";
    document.getElementsByClassName("thumb")[0].style = "";
}
const init = ()=>{
    close();
}